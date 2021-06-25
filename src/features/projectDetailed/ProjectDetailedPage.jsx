import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProjectDetailedChat from "./ProjectDetailedChat";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";
import LoadingComponent from "../../app/layout/LoadingComponent";
import useFirestoreDoc from "../../app/hooks/useFirestoreDoc";
import { listenToReleaseFromFirestore } from "../../app/firestore/firestoreService";

import { Redirect } from "react-router-dom";
import { listenToReleases } from "../releaseActions";

export default function ProjectDetailedPage({ match }) {
  const release = useSelector((state) =>
    state.release.releases.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);
  console.log(release);
  const dispatch = useDispatch();

  useFirestoreDoc({
    query: () => listenToReleaseFromFirestore(match.params.id),
    data: (release) => dispatch(listenToReleases([release])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!release && !error))
    return <LoadingComponent content='Loading project...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader release={release} />
        <ProjectDetailedInfo release={release} />
        <ProjectDetailedChat
          projectId={release.id}
          onClick={console.log(release.id)}
        />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
}
