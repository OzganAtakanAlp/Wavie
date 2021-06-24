import { FETCH_RELEASES } from "./releaseConstants";

const initialState = {
  releases: [],
};
export default function releaseReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_RELEASES:
      return {
        ...state,
        releases: payload,
      };
    default:
      return state;
  }
}
