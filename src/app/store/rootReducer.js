import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import projectReducer from "../../features/projectReducer";

const rootReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
});

export default rootReducer;
