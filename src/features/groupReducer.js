import { FETCH_GROUPS } from "./groupConstants";

const initialState = {
  groups: [],
};
export default function releaseReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_GROUPS:
      return {
        ...state,
        groups: payload,
      };

    default:
      return state;
  }
}
