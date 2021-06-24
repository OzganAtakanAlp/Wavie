import { FETCH_FRIENDS, SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
  authenticated: false,
  currentUser: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: "assets/user.png",
          uid: payload.uid,
          displayName: payload.displayName,
        },
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
        uid: null,
      };
    case FETCH_FRIENDS:
      return {
        ...state,
        user_friends_id: payload,
      };
    default:
      return state;
  }
}
