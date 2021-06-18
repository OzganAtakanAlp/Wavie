import React from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

export default function CollabProjectsListItem({ projects }) {
  const project = projects.project_settings_static;
  console.log(project);
  return (
    <>
      <Item.Group as={Link} to={`/projectDetailed/:${project.id}`}>
        <Item>
          <Item.Image size='tiny' />
          <Item.Content>
            <Item.Header>{project.project_name}</Item.Header>
            <Item.Description>{project.date_created}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );
}
