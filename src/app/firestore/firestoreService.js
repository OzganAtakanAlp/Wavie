import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getProjectsFromFirestore(observer, user) {
  return db
    .collection("Project")
    .where("__name__", ">", "25")
    .where("__name__", "<=", "29")
    .where(
      "project_settings_static.creator_id",
      "==",
      "kBm6zJMHicgj4NA15pUeR903K2u2"
    )
    .onSnapshot(observer);
}
// export function getProjectsFromFirestore(observer, user) {
//   return db
//     .collection("Project")
//     .where("__name__", ">", "25")
//     .where("__name__", "<=", "29")
//     .where("project_settings_static.creator_id", "==", user)
//     .onSnapshot(observer);
// }

export function getVersionsFromFirestore(observer) {
  var versions = db
    .collectionGroup("Versions")

    .where("creator_id", "==", "kBm6zJMHicgj4NA15pUeR903K2u2")
    .onSnapshot(observer);

  return versions;
}

// export function setUserProfileData(user) {
//   return db.collection("Person").doc(user.uid).set({
//     displayName: user.displayName,
//     email: user.email,
//   });
// }
export function setUserProfileDataInDocument(user) {
  var personDocRef = db.collection("Person").doc(user.uid).set(
    {
      firstName: user.firstName,
      lastName: user.lastName,
    },
    { merge: true }
  );
  return personDocRef;
}

export function getVersionSettingsFromFirestore(observer) {
  return db.collectionGroup("Versions").onSnapshot(observer);
}

export function updatePerson() {}
