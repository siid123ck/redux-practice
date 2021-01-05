const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    count: 0
}

//reducer function which takes state and action as arguements and return state
const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "INCREAMENT":
            return {...state, count: state.count + 1}
            break;
        case "ADD":
            return {...state, count: state.count + action.value}
            break;
    
        default:
            return state;
            break;
    }
}

// create store 
const store = createStore(rootReducer);
console.log(store.getState());

//subsbribe to get updated state
store.subscribe(()=>{
    console.log("subscripion value:", store.getState());
});

//dispatch an action 
store.dispatch({type:"INCREAMENT"});
console.log("state after first action:", store.getState())
store.dispatch({type:"INCREAMENT", value:23});
console.log("state after 2nd action:", store.getState());