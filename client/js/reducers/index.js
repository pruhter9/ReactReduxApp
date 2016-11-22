import { combineReducers } from "redux";

// import all singular reducers in folder that should be combined
import news from "./newsReducer";
import user from "./userReducer";

export default combineReducers({
	news,
	user
})