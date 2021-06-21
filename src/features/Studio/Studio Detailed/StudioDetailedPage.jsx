import React, { version } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "semantic-ui-react";
import StudioDetailedVersionsList from "./StudioDetailedVersionsList";
import VersionPlayInfo from "./Version Detailed/VersionPlayInfo";
import ProjectListItemPlaceholder from "../../Home Projects/ProjectListItemPlaceholder";
import useFirestoreVersions from "../../../app/hooks/useFirestoreVersions";
import { listentoVersionsFromFirestore } from "../../../app/firestore/firestoreService";

import LoadingComponent from "../../../app/layout/LoadingComponent";
import { NavLink, Redirect, Router } from "react-router-dom";
import { listenToVersions } from "../../versionActions";
import useStorage from "../../../app/hooks/useStorage";
import { getAudioFromStorage } from "../../../app/storage/storageService";
import { downloadAudio } from "../../audioActions";
import { openModal } from "../../../app/common/modals/modalReducer";

export default function StudioDetailedPage({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );
  const id = match.params.id;

  const { loading, error } = useSelector((state) => state.async);
  const { versions } = useSelector((state) => state.version);
  const audio = useSelector((state) => state.audios);
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
        <Button content='Make a Release' />
      </Grid.Column>
    </Grid>
  );
}
