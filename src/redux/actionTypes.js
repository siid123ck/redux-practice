export  const INCREAMENT = "INCREAMENT";
export  const DECREAMENT = "DECREAMENT";
export  const ADD = "ADD";
export  const SUB = "SUB";
export  const STORE_RESULT = "STORE_RESULT";
export  const DELETE_RESULT = "DELETE_RESULT";

export const increament =()=>({type:INCREAMENT}); 
export const decreament = ()=>({type:DECREAMENT});
export const add = (val)=>({type:ADD, value:val});
export const sub = val=>({type:SUB, value:val});
export const store_result = result=>({type:STORE_RESULT, result:result});
export const delete_result = id=>({type:STORE_RESULT, resultID:id});