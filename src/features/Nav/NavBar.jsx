import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() { 
    return(
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item header>
                    <img src="/assets/wavie.svg" alt="logo" style={{marginRight: 15}} />
                    Wavie
                </Menu.Item>
                <Menu.Item name="Home" />
                <Menu.Item>
                    <Button inverted content="Create a project" />
                </Menu.Item>
                <Menu.Item>
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Signup" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
