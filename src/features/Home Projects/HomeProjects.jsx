import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import { useDispatch, useSelector } from "react-redux";
import ProjectListItemPlaceholder from "./ProjectListItemPlaceholder";
import ProjectFilters from "./ProjectFilters";
import {
  listenToProjectsFromFirestore,
  listenToReleasesFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToReleases } from "../releaseActions";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";

import LoadingComponent from "../../app/layout/LoadingComponent";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);
  const { releases } = useSelector((state) => state.release);
  const { loading, error } = useSelector((state) => state.async);
  const { currentUser } = useSelector((state) => state.auth);
  const { currentUserProfile } = useSelector((state) => state.profile);
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

  if ((loading && !releases) || (!releases && !error))
    return <LoadingComponent content='Loading the profile...' />;
  return (
    <Grid>
      <GridColumn width={5}>
        <ProjectFilters />
      </GridColumn>
      <GridColumn width={7}>
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
