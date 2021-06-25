import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProjectDetailedChat from "../projectDetailed/ProjectDetailedChat";
import ProjectDetailedHeader from "../projectDetailed/ProjectDetailedHeader";
import ProjectDetailedInfo from "../projectDetailed/ProjectDetailedInfo";
import ProjectDetailedSidebar from "../projectDetailed/ProjectDetailedSidebar";
import LoadingComponent from "../../app/layout/LoadingComponent";
import useFirestoreDoc from "../../app/hooks/useFirestoreDoc";
import {
  listenToReleaseFromFirestore,
  listenToReleasesFromFirestore,
} from "../../app/firestore/firestoreService";

import { Redirect } from "react-router-dom";
import { listenToReleases } from "../releaseActions";
import ProjectList from "../Home Projects/ProjectList";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";

export default function ProjectDetailedPage({ match }) {
  const { releases } = useSelector((state) => state.release);
  const { loading, error } = useSelector((state) => state.async);
  console.log(releases);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToReleasesFromFirestore(),
    data: (releases) => dispatch(listenToReleases(releases)),
    deps: [dispatch],
  });

  if (loading || (!releases && !error))
    return <LoadingComponent content='Loading project...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectList releases={releases} />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
}
