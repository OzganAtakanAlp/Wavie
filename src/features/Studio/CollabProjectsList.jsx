import React from "react";
import CollabProjectsListItem from "./CollabProjectsListItem";

export default function CollabProjectsList({ versions }) {
  return (
    <>
      {versions.map((project) => (
        <CollabProjectsListItem versions={versions} key={versions.id} />
      ))}
    </>
  );
}
