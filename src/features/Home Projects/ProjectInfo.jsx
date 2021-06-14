import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Label, List } from "semantic-ui-react";
// import {
//   asyncActionStart,
//   asyncActionFinish,
//   asyncActionError,
// } from "../../app/async/asyncReducer";
// import {
//   dataFromSnapshot,
//   getVersionsFromFirestore,
// } from "../../app/firestore/firestoreService";
// import { listenToVersions } from "../projectActions";

export default function ProjectInfo({ versions }) {
  // const { versions } = useSelector((state) => state.version);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const unsubscribe = getVersionsFromFirestore({
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
    <List.Item>
      <Label>{versions}</Label>
      <Label>KEY</Label>
      <Label>GENRE</Label>
      <Label>GENRE</Label>
      <Label>GENRE</Label>
    </List.Item>
  );
}
