import { sampleData } from "../app/api/sampleData";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "./projectConstants";

const initialState = {
  projects: sampleData,
};

export default function eventReducer(state = initialState, { type, payload }) {
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
    default:
      return state;
  }
}
