import * as actionTypes from "./actionTypes";
const initialState = {
    count:11, 
    results:[]
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
    
        case actionTypes.STORE_RESULT:
            return {
                ...state, results:state.results.concat({val:state.count, id: new Date()})
            }
        case actionTypes.DELETE_RESULT:
            const updateResult = state.results.filter(result=>result.id !== action.resultID)
            return {
                ...state, results:updateResult
            }
    
        default:
            return state;
    }
}

export default rootReducer;