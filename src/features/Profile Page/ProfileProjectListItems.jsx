import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import ProjectInfo from "../Home Projects/ProjectInfo";
import { deleteProject } from "../projectActions";

export default function ProfileProjects({ project, versions }) {
  const dispatch = useDispatch();

  return (
    <>
      <Item.Group>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size='tiny' circular src={project.hostPhotoURL} />
                <Item.Content>
                  <Item.Header
                    content={project.project_settings_static.project_name}
                  />
                  <Item.Description>Circle rock mix</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name='clock' />{" "}
              {project.project_settings_static.date_created}
              <Icon name='marker' />
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>{/* <ProjectInfo versions={versions} /> */}</List>
          </Segment>
          <Segment clearing>
            <div>{project.description}</div>
            <Button as={Link} to={`/projects/${project.id}`} floated='right'>
              Lookey lookey
            </Button>
            <Button icon='share' floated='right'></Button>
            <Button icon='like' color='blue' floated='right'></Button>
            <Button
              onClick={() => dispatch(deleteProject(project.id))}
              floated='right'
              content='Mamma mia, delete-a-the project-a '
            />
          </Segment>
        </Segment.Group>
      </Item.Group>
    </>
  );
}
