import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "semantic-ui-react";
import StudioDetailedVersionsList from "./StudioDetailedVersionsList";

import ProjectListItemPlaceholder from "../../Home Projects/ProjectListItemPlaceholder";
import useFirestoreVersions from "../../../app/hooks/useFirestoreVersions";
import { listentoVersionsFromFirestore } from "../../../app/firestore/firestoreService";

import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Redirect } from "react-router-dom";
import { listenToVersions } from "../../versionActions";

export default function StudioDetailedPage({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );
  const id = match.params.id;

  const { loading, error } = useSelector((state) => state.async);
  const { versions } = useSelector((state) => state.version);

  const dispatch = useDispatch();

  useFirestoreVersions({
    query: () => listentoVersionsFromFirestore(match.params.id),
    data: (versions) => dispatch(listenToVersions(versions)),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!versions && !error))
    return <LoadingComponent content='Loading project...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <Grid>
      <Grid.Column width={4}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}

        <StudioDetailedVersionsList versions={versions} />
      </Grid.Column>
      <Grid.Column width={10}></Grid.Column>
      <Grid.Column width={2}>
        <Button content='Make a Release THIS IS A SHAM' />
      </Grid.Column>
    </Grid>
  );
}
