import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Item,
  Menu,
  Segment,
} from "semantic-ui-react";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import {
  dataFromSnapshot,
  getProjectsFromFirestore,
  getUserProfile,
  listenToProjectsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToCurrentUserProfile } from "./profileActions";
import ProjectListItemPlaceholder from "../Home Projects/ProjectListItemPlaceholder";
import ProfileProjectList from "./ProfileProjectList";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";
import ProfileStats from "./ProfileStats";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import useFirestoreDoc from "../../app/hooks/useFirestoreDoc";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function ProfilePage({ match }) {
  const { loading, error } = useSelector((state) => state.async);
  const { projects } = useSelector((state) => state.project);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { currentUserProfile } = useSelector((state) => state.profile);
  console.log(match.params.id);

  useFirestoreDoc({
    query: () => getUserProfile(match.params.id),
    data: (profile) => dispatch(listenToCurrentUserProfile(profile)),
    deps: [dispatch, match.params.id],
  });

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(currentUser),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch, currentUser],
  });

  if ((loading && !currentUserProfile) || (!currentUserProfile && !error))
    return <LoadingComponent content='Loading the profile...' />;

  return (
    <>
      <Container fluid className='profileHead'>
        <Grid>
          <Grid.Column width={16}>
            <Item.Group>
              <Item>
                <Item.Image avatar size='small' src='/assets/user.png' />
                <Item.Content inverted verticalAlign='middle'>
                  <Header
                    as='h1'
                    style={{ display: "block", marginBottom: 10 }}
                    content={currentUserProfile.display_name}
                  />
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>

          <Grid.Column width={10}>
            {loading && (
              <>
                <ProjectListItemPlaceholder />
                <ProjectListItemPlaceholder />
              </>
            )}
            {projects != null ? (
              <ProfileProjectList projects={projects} />
            ) : (
              <h1>You don't seem to have created any projects yet.</h1>
            )}
          </Grid.Column>
          <Grid.Column width={2}>
            <Button className='followButtonProfile' content='Follow' />
            <br />
            <Button className='DMButtonProfile' content='DM' />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
