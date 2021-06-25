import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import projectReducer from "../../features/projectReducer";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";
import versionReducer from "../../features/versionReducer";
import audioReducer from "../../features/audioReducer";
import sidebarReducer from "../../features/sidebarReducer";
import releaseReducer from "../../features/releaseReducer";
import groupReducer from "../../features/groupReducer";
import profileReducer from "../../features/Profile Page/profileReducer";

const rootReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  version: versionReducer,
  music: audioReducer,
  selectedVersion: sidebarReducer,
  release: releaseReducer,
  profile: profileReducer,
  group: groupReducer,
});

export default rootReducer;
