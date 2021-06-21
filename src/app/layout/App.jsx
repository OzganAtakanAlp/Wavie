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
import ProfilePage from "../../features/Profile Page/ProfilePage";
import AccountPage from "../../features/auth/AccountPage";
import ErrorComponent from "../common/errors/ErrorComponent";
import StudioDetailedPage from "../../features/Studio/Studio Detailed/StudioDetailedPage";
import VersionsPlayInfo from "../../features/Studio/Studio Detailed/Version Detailed/VersionPlayInfo";
import { StudioDetailedLayout } from "./StudioDetailedLayout";

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
              <Route path='/profile/:id' component={ProfilePage} />
              <Route path='/account' component={AccountPage} />
              <Route path='/error' component={ErrorComponent} />
              <Route
                exact
                path='/projects/:id'
                component={ProjectDetailedPage}
              />

              <Route
                exact
                path='/studioDetailed/:id'
                component={StudioDetailedLayout}
              />
              <Route
                exact
                path='/versionsPlayInfo/:id'
                component={VersionsPlayInfo}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}
