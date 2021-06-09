import React from 'react';
import { Item } from 'semantic-ui-react';

export default function CollabProjectsListItem({project}){
    return(
        <>
            <Item.Group link>
                <Item>
                    <Item.Image size='tiny' src={project.hostPhotoURL} />
                    <Item.Content>
                        <Item.Header>{project.title}</Item.Header>
                        <Item.Description>{project.date}</Item.Description>
                    </Item.Content>
                    </Item>
                
            </Item.Group>
        </>
    )
}