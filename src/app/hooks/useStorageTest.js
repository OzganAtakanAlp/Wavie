import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAudioRef } from "../../features/audioActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";
import { dataFromURL, getAudioFromStorage } from "../storage/storageService";

export default function useStorage({ query, data, deps }) {
  const dispatch = useDispatch();

  //   useEffect(() => {

  //       getAudioFromStorage(audioRef)
  //         .then((url) => {
  //           console.log("ur here");
  //           getAudioRef(url);
  //         })
  //         .catch((error) => {
  //           console.log("also u fucked up");
  //           switch (error.code) {
  //             case "storage/object-not-found":
  //               // File doesn't exist
  //               return "storage/object-not-found";
  //             case "storage/unauthorized":
  //               // User doesn't have permission to access the object
  //               return "storage/unauthorized";
  //             case "storage/canceled":
  //               // User canceled the upload
  //               return "storage/canceled";
  //             case "storage/unknown":
  //               // Unknown error occurred, inspect the server response
  //               return "storage/unknown";
  //             default:
  //               return "An error occurred";
  //           }
  //         });
  //     );
  //   }, deps); //eslint-disable-line react-hooks/exhaustive-deps
}
