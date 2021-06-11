import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import projectReducer from "../../features/projectReducer";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
  modals: modalReducer,
  auth: authReducer,
});

export default rootReducer;
