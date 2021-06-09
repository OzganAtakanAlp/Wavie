import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item>
      <Image avatar spaced='right' src='/assets/wavie.svg' />
      <Dropdown pointing='top left' text='Moi'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/home' text='Create Event' icon='plus' />
          <Dropdown.Item to='/home' text='My profile' icon='user' />
          <Dropdown.Item
            onClick={signOut}
            to='/home'
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
