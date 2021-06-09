import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }

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
        {authenticated && (
          <Menu.Item as={NavLink} to='/'>
            <Button inverted content='Create a project' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
