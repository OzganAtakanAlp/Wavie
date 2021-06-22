import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";
import { dataFromURL } from "../storage/storageService";

export default function useStorage({ query, data, deps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const audioRef = query()
      .getDownloadURL()
      .then(
        (url) => {
          console.log(url);
          if (!url.exists) {
            dispatch(
              asyncActionError({
                code: "not-found",
                message: "could not find document",
              })
            );
            return;
          }
          data(dataFromURL(url));
          dispatch(asyncActionFinish());
        },
        (error) => dispatch(asyncActionError())
      );
    return () => {
      audioRef();
    };
  }, deps); //eslint-disable-line react-hooks/exhaustive-deps
}
