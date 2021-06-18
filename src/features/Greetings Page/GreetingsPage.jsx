import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Label,
  Segment,
} from "semantic-ui-react";
import AuthLoginForm from "./AuthLoginForm";

export default function GreetingsPage({ history }) {
  const { authenticated } = useSelector((state) => state.auth);

  // (
  //   <Button onClick={() => history.push("/home")} size='huge' inverted>
  //     Get Started
  //     <Icon name='right arrow' inverted />
  //   </Button>
  // )
  return (
    <>
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container>
          <Header as='h1' inverted>
            <Image
              size='massive'
              src='/assets/wavie.svg'
              style={{ marginBottom: 12 }}
            />
            Wavie
          </Header>
          {authenticated ? history.push("/home") : <AuthLoginForm />}
          {/* <Button onClick={() => history.push("/home")} size='huge' inverted>
          Get Started
          <Icon name='right arrow' inverted />
        </Button> */}
          <Label content="Don't have an account? "></Label>
          <Label as={Link} to='/signUp' content='Click here to sign up' />
        </Container>
      </Segment>
    </>
  );
}
