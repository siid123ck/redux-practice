import * as actionTypes from "../actionTypes";
const initialState = {
    count:11
}

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.INCREAMENT:
            return {...state, count:state.count + 1}
        case actionTypes.DECREAMENT:
            return {...state, count:state.count - 1}

        case actionTypes.ADD:
            return {...state, count:state.count + action.value}
    
        case actionTypes.SUB:
            return {...state, count:state.count - action.value}
    
      
    
        default:
            return state;
    }
}

export default rootReducer;