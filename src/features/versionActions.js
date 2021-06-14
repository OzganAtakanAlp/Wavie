import { FETCH_VERSIONS } from "./versionConstants";

export function listenToVersions(versions) {
  return {
    type: FETCH_VERSIONS,
    payload: versions,
  };
}
