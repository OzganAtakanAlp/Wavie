import React, { useState } from "react";
import { Button, Grid, Menu, Segment } from "semantic-ui-react";
import CollabProjectsList from "./CollabProjectsList";
import { sampleData } from "../../app/api/sampleData";

export default function StudioPage() {
  const [projects, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={3}>
        <Menu pointing secondary vertical>
          <Menu.Item>
            <Menu.Header>Projects</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='All' />
              <Menu.Item name='Solo' />
              <Menu.Item name='Group' />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Projects</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='guy 1s name' />
              <Menu.Item name='guy 2s name' />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column stretched width={11}>
        <Segment>
          <CollabProjectsList projects={projects} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={2}>
        <Button content='Create a project' />
      </Grid.Column>
    </Grid>
  );
}
