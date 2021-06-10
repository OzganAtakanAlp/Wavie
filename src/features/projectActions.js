import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from "./projectConstants";

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
