import {
  DECREMENT_LIKES,
  DECREMENT_SHARES,
  FETCH_RELEASES,
  INCREMENT_LIKES,
  INCREMENT_SHARES,
} from "./releaseConstants";

export function listenToReleases(releases) {
  return {
    type: FETCH_RELEASES,
    payload: releases,
  };
}
export function incrementLikes(likes) {
  return {
    type: INCREMENT_LIKES,
    payload: likes + 1,
  };
}
export function incrementShares(shares) {
  return {
    type: INCREMENT_SHARES,
    payload: shares + 1,
  };
}
export function decrementLikes(likes) {
  return {
    type: DECREMENT_LIKES,
    payload: likes + 1,
  };
}
export function decrementShares(shares) {
  return {
    type: DECREMENT_SHARES,
    payload: shares - 1,
  };
}
