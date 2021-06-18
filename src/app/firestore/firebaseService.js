import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";

export function signInWithEmail(creds) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

export function signOutFirebase() {
  return firebase.auth().signOut();
}

export async function registerWithFirebase(creds) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    await result.user.updateProfile({
      displayName: creds.displayName,
    });
    console.log(result.user);
    return await setUserProfileData(
      result.user,
      creds.firstName,
      creds.lastName
    );
  } catch (error) {
    throw error;
  }
}
