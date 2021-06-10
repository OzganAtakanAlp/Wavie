import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProjectDetailedChat from "./ProjectDetailedChat";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";

export default function ProjectDetailedPage({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader project={project} />
        <ProjectDetailedInfo project={project} />
        <ProjectDetailedChat project={project} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProjectDetailedSidebar attendees={project.attendees} />
      </Grid.Column>
    </Grid>
  );
}
