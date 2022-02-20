import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  numberState: numberReducer,
  counterState: counterReducer,
  userState: userReducer,
});

export default rootReducer;
