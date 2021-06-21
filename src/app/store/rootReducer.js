import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import projectReducer from "../../features/projectReducer";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";
import versionReducer from "../../features/versionReducer";
import audioReducer from "../../features/audioReducer";

const rootReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  version: versionReducer,
  music: audioReducer,
});

export default rootReducer;
