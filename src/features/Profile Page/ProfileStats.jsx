import React from "react";
import { Segment, Statistic } from "semantic-ui-react";

export default function ProfileStats() {
  return (
    <Segment>
      <Statistic.Group horizontal>
        <Statistic size='mini' label='Plays' value={12} />
        <Statistic size='mini' label='Likes' value={32} />
        <Statistic size='mini' label='Followers' value={34} />
        <Statistic size='mini' label='Following' value={41} />
      </Statistic.Group>
    </Segment>
  );
}
