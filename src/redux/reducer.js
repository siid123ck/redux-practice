const initialState = {
    count:11, 
    results:[]
}

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "INCREAMENT":
            return {...state, count:state.count + 1}
        case "DECREAMENT":
            return {...state, count:state.count - 1}

        case "ADD":
            return {...state, count:state.count + action.value}
    
        case "SUB":
            return {...state, count:state.count - action.value}
    
        case "STORE_RESULT":
            return {
                ...state, results:state.results.concat({val:state.count, id: new Date()})
            }
        case "DELETE_RESULT":
            const updateResult = state.results.filter(result=>result.id !== action.resultID)
            return {
                ...state, results:updateResult
            }
    
        default:
            return state;
    }
}

export default rootReducer;