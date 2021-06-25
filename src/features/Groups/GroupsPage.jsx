import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "../../features/Home Projects/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import ProjectListItemPlaceholder from "../../features/Home Projects/ProjectListItemPlaceholder";
import ProjectFilters from "../../features/Home Projects/ProjectFilters";
import {
  listenToGroupsFromFirestore,
  listenToProjectsFromFirestore,
  listenToReleasesFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToReleases } from "../releaseActions";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";
import { listenToGroups } from "../groupActions";
import GroupList from "./GroupList";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);
  const { releases } = useSelector((state) => state.release);
  const { loading, error } = useSelector((state) => state.async);
  const { currentUser } = useSelector((state) => state.auth);
  const { groups } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch],
  });

  useFirestoreCollection({
    query: () => listenToGroupsFromFirestore(),
    data: (groups) => dispatch(listenToGroups(groups)),
    deps: [dispatch],
  });
  console.log(groups);
  if ((loading && !groups) || (!releases && !error))
    return <LoadingComponent content='Loading the profile...' />;
  return (
    <Grid>
      <GridColumn width={5}>{/* <ProjectFilters /> */}</GridColumn>
      <GridColumn width={7}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}
        <GroupList groups={groups} />
      </GridColumn>
    </Grid>
  );
}
