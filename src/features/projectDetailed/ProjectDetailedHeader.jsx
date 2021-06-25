import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default function ProjectDetailedHeader({ release }) {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/music.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={release.project_name}
                  style={{ color: "white" }}
                />
                <p>{release.date_created}</p>
                <p>
                  Brainchild of: <strong>{release.creator_id}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button>Leave</Button>
        <Button color='teal'>Ask to participate</Button>

        {/* <Button
          as={Link}
          to={`/studioDetailed/${release.id}}`}
          color='orange'
          floated='right'
        >
          Manage Event
        </Button> */}
      </Segment>
    </Segment.Group>
  );
}
