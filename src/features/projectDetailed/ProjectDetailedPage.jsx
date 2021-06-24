import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProjectDetailedChat from "./ProjectDetailedChat";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";
import LoadingComponent from "../../app/layout/LoadingComponent";
import useFirestoreDoc from "../../app/hooks/useFirestoreDoc";
import { listenToProjectFromFirestore } from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { Redirect } from "react-router-dom";

export default function ProjectDetailedPage({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);
  console.log(project);
  const dispatch = useDispatch();

  useFirestoreDoc({
    query: () => listenToProjectFromFirestore(match.params.id),
    data: (project) => dispatch(listenToProjects([project])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!project && !error))
    return <LoadingComponent content='Loading project...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader project={project} />
        <ProjectDetailedInfo project={project} />
        <ProjectDetailedChat
          projectId={project.id}
          onClick={console.log(project.id)}
        />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
}
