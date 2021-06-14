import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectFilters from "../Home Projects/ProjectFilters";
import ProjectList from "../Home Projects/ProjectList";
import ProjectListItemPlaceholder from "../../features/Home Projects/ProjectListItemPlaceholder";
import {
  dataFromSnapshot,
  getProjectsFromFirestore,
  getVersionsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";
import { listenToVersions } from "../versionActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";

export default function BrowseProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);
  const { versions } = useSelector((state) => state.versions);
  const { currentUser } = useSelector((state) => state.auth);
  const uid = currentUser.uid;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = getProjectsFromFirestore(
      {
        next: (snapshot) => {
          dispatch(
            listenToProjects(
              snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
            )
          );
          dispatch(asyncActionFinish());
        },
        error: (error) => dispatch(asyncActionError(error)),
        complete: () => console.log("you will never see this message"),
      },
      uid
    );

    return unsubscribe;
  }, [dispatch, uid]);

  return (
    <Grid>
      <GridColumn width={4}>
        <ProjectFilters />
      </GridColumn>
      <GridColumn width={12}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}
        <ProjectList projects={projects} versions={versions} />
      </GridColumn>
    </Grid>
  );
}
