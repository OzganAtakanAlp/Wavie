import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ history }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/wavie.svg' alt='logo' style={{ marginRight: 15 }} />
          Wavie
        </Menu.Item>

        <Menu.Item as={NavLink} to='/home' name='Home' />
        <Menu.Item as={NavLink} to='/browse' name='Browse' />
        <Menu.Item as={NavLink} to='/studio' name='Studio' />
        <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/studio'>
            <Button inverted content='Create a project' />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
