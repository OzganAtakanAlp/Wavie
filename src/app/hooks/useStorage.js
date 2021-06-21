import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncActionStart } from "../async/asyncReducer";

export default function useStorage({ query, data, deps }) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const audioRef = query().getDownloadURL().then((url) => {
  //       const xhr
  //   })   ;
  // });
}
