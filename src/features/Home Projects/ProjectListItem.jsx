import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import ProjectInfo from './ProjectInfo';

export default function ProjectListItem({project}){ 
    return (
        
        <>
        <Item.Group >
            <Segment.Group >
                <Segment>
                    <Item.Group link as={NavLink} to={`/projects/${project.id}`} >
                        <Item>
                            <Item.Image size='tiny' circular src={project.hostPhotoURL}/>
                            <Item.Content>
                                <Item.Header content='Project Title' />
                                <Item.Description>
                                    Circle rock mix
                                </Item.Description>
                            </Item.Content>

                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name='clock'  /> {project.date}
                        <Icon name= 'marker' /> {project.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal> 
                        <ProjectInfo />
                    </List>
                </Segment>
                <Segment clearing>
                    <div>{project.description}</div>
                    <Button floated='right'>Lookey lookey</Button>
                    <Button icon='share'  floated='right'></Button>
                    <Button icon='like' color='blue' floated='right'></Button>
                </Segment>
            </Segment.Group>
            </Item.Group>
</>
    )
}