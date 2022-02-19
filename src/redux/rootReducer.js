import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";

const rootReducer = combineReducers({
  number: numberReducer,
  counter: counterReducer,
});

export default rootReducer;
