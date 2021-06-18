import React from "react";
import CollabProjectsListItem from "./CollabProjectsListItem";

export default function CollabProjectsList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <CollabProjectsListItem projects={project} key={project.id} />
      ))}
    </>
  );
}
