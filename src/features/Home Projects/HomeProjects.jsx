import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import { useDispatch, useSelector } from "react-redux";
import ProjectListItemPlaceholder from "./ProjectListItemPlaceholder";
import ProjectFilters from "./ProjectFilters";
import { listenToProjectsFromFirestore } from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import useFirestoreCollection from "../../app/hooks/useFirestoreCollection";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);

  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToProjectsFromFirestore(),
    data: (projects) => dispatch(listenToProjects(projects)),
    deps: [dispatch],
  });

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
        <ProjectList projects={projects} />
      </GridColumn>
    </Grid>
  );
}
