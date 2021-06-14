import React, { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import { useDispatch, useSelector } from "react-redux";
import ProjectListItemPlaceholder from "./ProjectListItemPlaceholder";
import ProjectFilters from "./ProjectFilters";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import {
  dataFromSnapshot,
  getProjectsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToProjects } from "../projectActions";

export default function HomeProjects() {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const uid = currentUser.uid;
  //console.log(typeof uid);

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
        <ProjectList projects={projects} />
      </GridColumn>
    </Grid>
  );
}
