import { fetchSampleData } from "../app/api/mockApi";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../app/async/asyncReducer";
import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
} from "./projectConstants";

export function loadEvents() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const projects = await fetchSampleData();
      dispatch({ type: FETCH_PROJECTS, payload: projects });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function createProject(project) {
  return {
    type: CREATE_PROJECT,
    payload: project,
  };
}
export function updateProject(project) {
  return {
    type: UPDATE_PROJECT,
    payload: project,
  };
}
export function deleteProject(projectId) {
  return {
    type: DELETE_PROJECT,
    payload: projectId,
  };
}
