import React from "react";
import { useDispatch } from "react-redux";

import { Divider, Item, Menu } from "semantic-ui-react";

import { SelectedProjectId } from "../../sidebarReducer";

export default function StudioDetailedVersionsListItem({ version }) {
  const dispatch = useDispatch();
  function versionClickHandler() {
    dispatch(SelectedProjectId(version.id));
  }

  return (
    <Item.Group
      /*as={NavLink}
       to={`/versionsPlayInfo/${version.id}` */ onClick={versionClickHandler}
    >
      <Item>
        <Item.Content>
          <Item.Image size='mini' src='/assets/user.png'></Item.Image>
          <Item.Header>Version: {version.id} </Item.Header>
          <Divider />
          <Item.Meta>No comment</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
