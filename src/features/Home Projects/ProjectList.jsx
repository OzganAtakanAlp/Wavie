import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectListItem project={project} key={project.id} />
      ))}
    </>
  );
}
