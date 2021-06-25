import { FETCH_GROUPS } from "./groupConstants";
export function listenToGroups(groups) {
  return {
    type: FETCH_GROUPS,
    payload: groups,
  };
}
