import { FETCH_VERSIONS } from "./versionConstants";

const initialState = {
  versions: [],
};

export default function versionReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_VERSIONS:
      return {
        ...state,
        versions: payload,
      };
    default:
      return state;
  }
}
