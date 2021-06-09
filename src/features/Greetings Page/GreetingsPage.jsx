import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function GreetingsPage({history}){
    
    return(
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/wavie.svg' style={{marginBottom: 12}} />Wavie
                </Header>
                <Button onClick={() => history.push('/home')} size='huge' inverted>
                    Get Started
                    <Icon name= 'right arrow' inverted />
                </Button>
            </Container>
        </Segment>

    )
    }