import * as actionTypes from "../actionTypes";
const initialState = {
    results:[]
}

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
     
        case actionTypes.STORE_RESULT:
            return {
                ...state, results:state.results.concat({val: action.result, id: new Date()})
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