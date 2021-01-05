const initialState = {
    count: 122
}

const store = require("redux").createStore((state=initialState, action)=>{
    switch (action.type) {
        case "INCREAMENT":
            return {...state, count:state.count + 1}
        case "DECREAMENT":
            return {...state, count:state.count - 1}

        case "ADD":
            return {...state, count:state.count + action.value}
    
        case "SUB":
            return {...state, count:state.count - action.value}
    
        default:
            return state;
    }
})

export default store;