import firebase from "../config/firebase";

const storage = firebase.storage();
const storageRef = firebase.storage().ref();

export function dataFromURL(url) {
  if (!url.exists) return undefined;
  const realUrl = url;

  return {
    ...realUrl,
  };
}

export function getAudioFromStorage(bouncePath) {
  return storageRef.child(bouncePath).getDownloadURL();
}
