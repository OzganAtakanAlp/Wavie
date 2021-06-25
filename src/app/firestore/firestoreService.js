import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }
  return {
    ...data,
    id: snapshot.id,
  };
}
export function getUser(user) {
  return db.collection("Person").doc(user.uid);
}

export function listenToReleasesFromFirestore(user) {
  return db.collection("Releases");
}

export function listenToReleaseFromFirestore(releaseId) {
  return db.collection("Releases").doc(releaseId);
}

export function listenToProjectsFromFirestore() {
  return db
    .collection("Project")
    .where("__name__", ">", "25")
    .where("__name__", "<=", "41");
}
export function listentoVersionsFromFirestore(projectId) {
  console.log(projectId);
  return db
    .collection("Project")
    .doc(projectId)
    .collection("Versions")
    .orderBy("date_created", "desc");
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
export function updateUserProfileDataForReleases(creatorId, releaseId) {
  return db
    .collection("Person")
    .doc(creatorId)
    .set(
      {
        user_releases_id: [...releaseId],
      },
      { merge: true }
    );
}
export function addReleaseId(releaseId, version) {
  return db
    .collection("Person")
    .doc(version.creator_id)
    .update(
      {
        user_releases_id: firebase.firestore.FieldValue.arrayUnion(releaseId),
      },
      { merge: true }
    );
}
export function addGroupId(releaseId, userId) {
  return db
    .collection("Person")
    .doc(userId)
    .update(
      {
        user_groups_id: firebase.firestore.FieldValue.arrayUnion(releaseId),
      },
      { merge: true }
    );
}
export function setUserProfileData(user, firstName, lastName) {
  return db
    .collection("Person")
    .doc(user.uid)
    .set({
      display_name: user.displayName,
      email: user.email, //might get deleted, dunno
      name: firstName,
      surname: lastName,
      user_friends_id: [""],
      user_groups_id: [""],
      user_id: user.uid,
      user_project_id: [""],
      user_releases_id: [""],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export function listenToProjectFromFirestore(projectId) {
  return db.collection("Project").doc(projectId);
}
export function listenToGroupsFromFirestore() {
  return db.collection("Groups");
}

export function createRelease(versions, project_name) {
  var newDocRef = db.collection("Releases").doc();

  newDocRef.set({
    release_id: newDocRef.id,
    creator_id: versions.creator_id,
    audioUrl: versions.audioUrl,
    project_name: project_name.project_name,
    date_released: firebase.firestore.FieldValue.serverTimestamp(),
    bpm: versions.project_bpm,
    key: versions.project_key,
    style: versions.project_style,
    like_count: 0,
    share_count: 0,
  });
  return newDocRef;
}

export async function followUser(profile) {
  const user = firebase.auth().currentUser;
  try {
    await db
      .collection("Following")
      .doc(user.uid)
      .collection("userFollowing")
      .doc(profile.id)
      .set({
        display_name: profile.displayName,
      });
  } catch (error) {}
}

export function getUserProfile(userId) {
  console.log(userId);
  return db.collection("Person").doc(userId);
}

export function incrementLikeCount(releaseId) {
  return db
    .collection("Releases")
    .doc(releaseId)
    .set(
      {
        like_count: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
}
export function decrementLikeCount(releaseId) {
  return db
    .collection("Releases")
    .doc(releaseId)
    .set(
      {
        like_count: firebase.firestore.FieldValue.increment(-1),
      },
      { merge: true }
    );
}
export function incrementShareCount(releaseId) {
  return db
    .collection("Releases")
    .doc(releaseId)
    .set(
      {
        share_count: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
}

export function createGroup(userId, group_name) {
  var newDocRef = db.collection("Groups").doc();

  newDocRef.set({
    group_name: group_name,
    group_id: newDocRef.id,
    creator_id: userId,
    admin: [""],
    master: [""],
    group_members: [userId],
    group_releases: [""],
  });
  return newDocRef;
}
