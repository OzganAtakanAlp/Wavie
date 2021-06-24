import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label, List } from "semantic-ui-react";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../../app/async/asyncReducer";
import {
  dataFromSnapshot,
  getProjectInfo,
  getVersionsFromFirestore,
} from "../../app/firestore/firestoreService";
import { listenToVersions } from "../versionActions";

export default function ProjectInfo({ versions }) {
  const versionId = useSelector((state) => state.selectedVersion.selectedId);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const unsubscribe = getProjectInfo({
  //     next: (snapshot) => {
  //       dispatch(
  //         listenToVersions(
  //           snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
  //         )
  //       );
  //       dispatch(asyncActionFinish());
  //     },
  //     error: (error) => dispatch(asyncActionError(error)),
  //     complete: () => console.log("you will never see this message"),
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  console.log(versions);

  return (
    <List>
      <Label>
        {versions[Math.abs(versionId - versions.length)].project_style}
      </Label>
      <Label>
        {versions[Math.abs(versionId - versions.length)].project_bpm}
      </Label>
      <Label>
        {versions[Math.abs(versionId - versions.length)].project_key}
      </Label>
    </List>
  );
}
