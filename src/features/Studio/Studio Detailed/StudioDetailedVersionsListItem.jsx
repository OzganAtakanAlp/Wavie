import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Divider, Item, Menu } from "semantic-ui-react";

export default function StudioDetailedVersionsListItem({ version }) {
  return (
    <Item.Group as={NavLink} to={`/versionsPlayInfo/${version.id}`}>
      <Item>
        <Item.Content>
          <Item.Image size='mini' src='/assets/user.png'></Item.Image>
          <Item.Header>Version: {version.id} </Item.Header>
          <Divider />
          <Item.Meta>No Comment</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
