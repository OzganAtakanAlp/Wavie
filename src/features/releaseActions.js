import { FETCH_RELEASES } from "./releaseConstants";

export function listenToReleases(releases) {
  return {
    type: FETCH_RELEASES,
    payload: releases,
  };
}
