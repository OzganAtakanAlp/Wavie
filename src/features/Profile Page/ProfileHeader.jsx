import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Header, Item, Segment } from "semantic-ui-react";

export default function ProfileHeader() {
  return (
    <Segment>
      <Grid.Column width={12}>
        <Item.Group>
          <Item>
            <Item.Image avatar size='small' src='/assets/user.png' />
            <Item.Content verticalAlign='middle'>
              <Header
                as='h1'
                style={{ display: "block", marginBottom: 10 }}
                content='Display name'
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Segment>
  );
}
