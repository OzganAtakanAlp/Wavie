import React from "react";
import ProfileProjectListItems from "./ProfileProjectListItems";

export default function ProfileProjectList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ProfileProjectListItems project={project} key={project.id} />
      ))}
    </>
  );
}
