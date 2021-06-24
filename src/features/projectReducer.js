import {
  CLEAR_COMMENTS,
  CREATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
  LISTEN_TO_PROJECT_CHAT,
  UPDATE_PROJECT,
} from "./projectConstants";

const initialState = {
  projects: [],
  comments: [],
};

export default function projectReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [
          state.projects.filter((prj) => prj.id !== payload.id),
          payload,
        ],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: [...state.projects.filter((evt) => evt.id !== payload)],
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case LISTEN_TO_PROJECT_CHAT:
      return {
        ...state,
        comments: payload,
      };
    case CLEAR_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
}
