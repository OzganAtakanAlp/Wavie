import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import BrowseProjects from "../../features/Browse Projects/BrowseProjects";
import GreetingsPage from "../../features/Greetings Page/GreetingsPage";
import HomeProjects from "../../features/Home Projects/HomeProjects";

import NavBar from "../../features/Nav/NavBar";
import ProjectDetailedPage from "../../features/projectDetailed/ProjectDetailedPage";
import Sandbox from "../../features/sandbox/Sandbox";
import StudioPage from "../../features/Studio/StudioPage";
import ModalManager from "../common/modals/ModalManager";
import SignUpPage from "../../features/Greetings Page/SignUpPage";

export default function App() {
  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={GreetingsPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/home' component={HomeProjects} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route path='/browse' component={BrowseProjects} />
              <Route path='/studio' component={StudioPage} />
              <Route path='/signUp' component={SignUpPage} />
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
