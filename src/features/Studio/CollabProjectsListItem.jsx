import React from "react";
import { Item } from "semantic-ui-react";

export default function CollabProjectsListItem({ versions }) {
  return (
    <>
      <Item.Group link>
        <Item>
          <Item.Image size='tiny' src={versions.hostPhotoURL} />
          <Item.Content>
            <Item.Header></Item.Header>
            <Item.Description>{versions.date}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );
}
