import React from "react";
import { NavLink } from "react-router-dom";
import { Item, Menu } from "semantic-ui-react";

export default function StudioDetailedVersionsListItem({ version }) {
  console.log(version);
  console.log(version.id);
  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Image size='tiny' src='/assets/user.png'></Item.Image>
          <Item.Header>Version: {version.id} </Item.Header>
          <Item.Meta>That movie was a punch in the gut man</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
