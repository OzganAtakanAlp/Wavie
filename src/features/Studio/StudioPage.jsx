import React, { useEffect } from "react";
import { Button, Grid, Menu, Segment } from "semantic-ui-react";
import CollabProjectsList from "./CollabProjectsList";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import {
  dataFromSnapshot,
  getVersionsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToVersions } from "../versionActions";

export default function StudioPage() {
  const { projects } = useSelector((state) => state.project);
  const { versions } = useSelector((state) => state.versions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = getVersionsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToVersions(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        dispatch(asyncActionFinish());
      },
      error: (error) => dispatch(asyncActionError(error)),
      complete: () => console.log("you will never see this message"),
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <Grid>
      <Grid.Column width={3}>
        <Menu pointing secondary vertical>
          <Menu.Item>
            <Menu.Header>Projects</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='All' />
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
          <CollabProjectsList versions={versions} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  );
}
