import {combineReducers} from "redux";
import mainReducer from "./mainReducer";

const reducer = combineReducers({
    registration: mainReducer,
})
export default reducer;