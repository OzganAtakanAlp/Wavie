import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import { useSelector } from "react-redux";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);

  return (
    <Grid>
      <GridColumn width={4}>
        <h2>Left column</h2>
      </GridColumn>
      <GridColumn width={12}>
        <ProjectList projects={projects} />
      </GridColumn>
    </Grid>
  );
}
