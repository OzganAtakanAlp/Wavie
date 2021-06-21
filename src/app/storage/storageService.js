import firebase from "../config/firebase";

const storage = firebase.storage();

export function getAudioFromStorage(bouncePath) {
  return storage.ref(bouncePath);
}
