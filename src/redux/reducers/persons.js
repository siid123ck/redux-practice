const initialState = {
  persons:[ ]
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "ADD":
            const personData = {
                id:Math.random(), ...action.payload
            }
            return {...state, persons:state.persons.concat(personData)}
           
        case "DELETE_PERSON":
            const updatedData= state.persons.filter(person=>person.id!==action.personID)
            return {
                ...state, persons:updatedData
            }
        default:
           return state;
    }
}

export default reducer;