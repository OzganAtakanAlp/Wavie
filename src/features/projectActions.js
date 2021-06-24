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
  LISTEN_TO_PROJECT_CHAT,
} from "./projectConstants";

export function loadProjects() {
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

export function listenToProjects(projects) {
  return {
    type: FETCH_PROJECTS,
    payload: projects,
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

export function listenToProjectChat(comments) {
  return {
    type: LISTEN_TO_PROJECT_CHAT,
    payload: comments,
  };
}
