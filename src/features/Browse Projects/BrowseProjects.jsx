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
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToVersions } from "../versionActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";

export default function BrowseProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);

  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(),
    data: (projects) => dispatch(listenToProjects(projects)),
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
        <ProjectList projects={projects} />
      </GridColumn>
    </Grid>
  );
}
