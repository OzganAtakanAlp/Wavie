import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  Button,
  Container,
  Grid,
  Header,
  Image,
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
  listenToProjectsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import ProjectListItemPlaceholder from "../Home Projects/ProjectListItemPlaceholder";
import ProfileProjectList from "./ProfileProjectList";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";
import ProfileStats from "./ProfileStats";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePage() {
  const { loading } = useSelector((state) => state.async);
  const { projects } = useSelector((state) => state.project);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(currentUser),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch, currentUser],
  });

  return (
    <>
      <Container fluid className='profileHead'>
        <Grid>
          <Grid.Row>
            <ProfileHeader />
          </Grid.Row>
          <Grid.Column width={4}>
            <ProfileStats />
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
