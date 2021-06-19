import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import CollabProjectsList from "./CollabProjectsList";
import { useDispatch, useSelector } from "react-redux";

import {
  dataFromSnapshot,
  getVersionsFromFirestore,
  listenToProjectsFromFirestore,
} from "../../app/firestore/firestoreService";

import { listenToProjects } from "../projectActions";
import { Link } from "react-router-dom";
import ProjectListItemPlaceholder from "../Home Projects/ProjectListItemPlaceholder";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";

export default function StudioPage() {
  const { projects } = useSelector((state) => state.project);

  const { currentUser } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch],
  });
  return (
    <Grid>
      <Grid.Column width={3}>
        <Menu pointing secondary vertical>
          <Menu.Item>
            <Menu.Header>Projects</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='All' active={true} />
              <Menu.Item name='Solo' />
              <Menu.Item name='Group' />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Versions</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='guy 1s name' />
              <Menu.Item name='guy 2s name' />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column stretched width={10}>
        <Segment>
          {loading && (
            <>
              <ProjectListItemPlaceholder />
              <ProjectListItemPlaceholder />
            </>
          )}
          <CollabProjectsList projects={projects} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  );
}
