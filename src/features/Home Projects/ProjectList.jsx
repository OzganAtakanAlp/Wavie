import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ releases }) {
  return (
    <>
      {releases.map((release) => (
        <ProjectListItem release={release} key={release.id} />
      ))}
    </>
  );
}
