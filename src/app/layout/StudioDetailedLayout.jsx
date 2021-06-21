import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Sidebar from "../../features/Studio/Studio Detailed/Sidebar";
import VersionPlayInfo from "../../features/Studio/Studio Detailed/Version Detailed/VersionPlayInfo";
import { listenToVersions } from "../../features/versionActions";
import { listentoVersionsFromFirestore } from "../firestore/firestoreService";
import useFirestoreVersions from "../hooks/useFirestoreVersions";
import LoadingComponent from "./LoadingComponent";

export function StudioDetailedLayout({ match }) {
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );
  const id = match.params.id;

  const { loading, error } = useSelector((state) => state.async);
  const { versions } = useSelector((state) => state.version);
  const audio = useSelector((state) => state.audios);
  const dispatch = useDispatch();

  useFirestoreVersions({
    query: () => listentoVersionsFromFirestore(match.params.id),
    data: (versions) => dispatch(listenToVersions(versions)),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!versions && !error))
    return <LoadingComponent content='Loading project...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <>
      <Grid>
        <Grid.Column width={4}>
          <Sidebar versions={versions} />
        </Grid.Column>
        <Grid.Column width={10}>
          <VersionPlayInfo />
        </Grid.Column>
      </Grid>

      <h1>dsadsa</h1>
    </>
  );
}
