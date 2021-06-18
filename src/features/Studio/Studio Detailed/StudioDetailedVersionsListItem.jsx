import React from "react";
import { Item, Menu } from "semantic-ui-react";

export default function StudioDetailedVersionsListItem() {
  return (
    <Item.Group link>
      <Item>
        <Item.Content>
          <Item.Image
            size='tiny'
            src='../../../../public/assets/user.png'
          ></Item.Image>
          <Item.Header>Goofie man</Item.Header>
          <Item.Meta>That movie was a punch in the gut man</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
