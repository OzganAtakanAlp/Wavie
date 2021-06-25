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
import GroupsPage from "../../features/Groups/GroupsPage";
import GroupCreate from "../../features/Groups/GroupCreate";
import GroupDetailed from "../../features/Groups/GroupDetailed";
import { StudioDetailedLayout } from "./StudioDetailedLayout";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";

export default function App() {
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content='Loading app...' />;

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
              <Route path='/groups' component={GroupsPage} />
              <Route path='/createGroup' component={GroupCreate} />
              <Route path='/signUp' component={SignUpPage} />
              <Route path='/profile/:id' component={ProfilePage} />
              <Route path='/account' component={AccountPage} />
              <Route path='/error' component={ErrorComponent} />
              <Route
                exact
                path='/projects/:id'
                component={ProjectDetailedPage}
              />
              <Route exact path='/groups/:id' component={GroupDetailed} />

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
