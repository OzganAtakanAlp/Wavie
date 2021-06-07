import React from 'react';
import { Container } from 'semantic-ui-react';
import HomeProjects from '../../features/Home Projects/HomeProjects';

import NavBar from '../../features/Nav/NavBar';

export default function App() {
  
    return (
      <>
        <NavBar />
        <Container className="main">
          <HomeProjects />
        </Container>
      </>
    );
  
}
