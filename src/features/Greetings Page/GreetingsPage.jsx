import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Header, Image, Label, Segment } from "semantic-ui-react";
import AuthLoginForm from "./AuthLoginForm";

export default function GreetingsPage({ history }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Segment textAlign='center' vertical className='masthead'>
        <Container>
          <Header as='h1'>
            <Image
              size='massive'
              src='/assets/wavie.svg'
              style={{ marginBottom: 12 }}
            />
            Wavie
          </Header>
          {authenticated ? history.push("/home") : <AuthLoginForm />}
          <Label content="Don't have an account? "></Label>
          <Label as={Link} to='/signUp' content='Click here to sign up' />
        </Container>
      </Segment>
    </>
  );
}
