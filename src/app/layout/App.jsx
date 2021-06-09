import React from "react";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import BrowseProjects from "../../features/Browse Projects/BrowseProjects";
import GreetingsPage from "../../features/Greetings Page/GreetingsPage";
import HomeProjects from "../../features/Home Projects/HomeProjects";

import NavBar from "../../features/Nav/NavBar";
import ProjectDetailedPage from "../../features/projectDetailed/ProjectDetailedPage";
import StudioPage from "../../features/Studio/StudioPage";

export default function App() {
  return (
    <>
      <Route exact path='/' component={GreetingsPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/home' component={HomeProjects} />
              <Route path='/browse' component={BrowseProjects} />
              <Route path='/studio' component={StudioPage} />
              <Route
                exact
                path='/projects/:id'
                component={ProjectDetailedPage}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}
