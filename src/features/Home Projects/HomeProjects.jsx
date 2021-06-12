import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import { useSelector } from "react-redux";
import ProjectListItemPlaceholder from "./ProjectListItemPlaceholder";
import ProjectFilters from "./ProjectFilters";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);

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
