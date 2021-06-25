import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectFilters from "../Home Projects/ProjectFilters";
import ProjectList from "../Home Projects/ProjectList";
import ProjectListItemPlaceholder from "../../features/Home Projects/ProjectListItemPlaceholder";
import {
  dataFromSnapshot,
  getProjectsFromFirestore,
  getVersionsFromFirestore,
  listenToProjectsFromFirestore,
  listenToReleasesFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToVersions } from "../versionActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";
import { listenToReleases } from "../releaseActions";

export default function BrowseProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);
  const { releases } = useSelector((state) => state.release);

  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch],
  });
  useFirestoreCollection({
    query: () => listenToReleasesFromFirestore(),
    data: (releases) => dispatch(listenToReleases(releases)),
    deps: [dispatch],
  });

  return (
    <Grid>
      <GridColumn width={4}>
        <ProjectFilters />
      </GridColumn>
      <GridColumn width={12}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}
        <ProjectList releases={releases} />
      </GridColumn>
    </Grid>
  );
}
