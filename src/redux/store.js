import rootReducer from "./reducer";
const createStore = require("redux").createStore;
const applyMiddleWare = require("redux").applyMiddleware;

const logger = store => {
  return  next =>{
     return   action =>{
    console.log("middleware dispatching action", action);
    const result = next(action);
    console.log("middlesare next state", store.getState())
    return result;
        }
    }  
}

const store = createStore(rootReducer, applyMiddleWare(logger));

export default store;