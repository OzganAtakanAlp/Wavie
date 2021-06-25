import {
  // DECREMENT_LIKES,
  // DECREMENT_SHARES,
  FETCH_RELEASES,
  // INCREMENT_LIKES,
  // INCREMENT_SHARES,
} from "./releaseConstants";

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
    // case INCREMENT_LIKES:
    //   return {
    //     ...state,
    //     like_count: payload,
    //   };
    // case DECREMENT_LIKES:
    //   return {
    //     ...state,
    //     like_count: payload,
    //   };
    // case DECREMENT_SHARES:
    //   return {
    //     ...state,
    //     share_count: payload,
    //   };
    // case INCREMENT_SHARES:
    //   return {
    //     ...state,
    //     share_count: payload,
    //   };

    default:
      return state;
  }
}
