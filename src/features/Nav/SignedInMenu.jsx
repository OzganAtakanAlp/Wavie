import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutFirebase } from "../../app/firestore/firebaseService";

export default function SignedInMenu() {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  async function handleSignOut() {
    try {
      await signOutFirebase();
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || "assets/user.png"}
      />
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/home' text='Create Event' icon='plus' />
          <Dropdown.Item
            as={Link}
            to={`/profile/:${currentUser.uid}`}
            text='Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/account'
            text='Account'
            icon='settings'
          />
          <Dropdown.Item onClick={handleSignOut} text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
