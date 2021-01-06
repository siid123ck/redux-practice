import resultReducer from "./reducers/result";
import counterReducer from "./reducers/counter";
import {combineReducers} from "redux";
import personReducer from "./reducers/persons";

const rootReducer = combineReducers({
ctr: counterReducer, 
store_res: resultReducer,
prs:personReducer
})

export default rootReducer;