import React from "react";
import GroupListItem from "./GroupListItem";

export default function GroupList({ groups }) {
  return (
    <>
      {groups.map((group) => (
        <GroupListItem groups={group} key={group.id} />
      ))}
    </>
  );
}
