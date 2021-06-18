import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import StudioDetailedVersionsList from "./StudioDetailedVersionsList";
import VersionPlayInfo from "./VersionPlayInfo";
import ProjectListItemPlaceholder from "../../Home Projects/ProjectListItemPlaceholder";

export default function StudioDetailedPage({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );
  const { loading } = useSelector((state) => state.async);
  console.log(project);
  return (
    <Grid>
      <Grid.Column width={4}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}

        <StudioDetailedVersionsList versions={project} />
      </Grid.Column>
      <Grid.Column width={12}>
        <VersionPlayInfo />
      </Grid.Column>
    </Grid>
  );
}
