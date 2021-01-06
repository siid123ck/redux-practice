const logger = store => {
    console.log('function with store argument',store)
    return next=>{
        console.log('function with next argument',store, next)
        return action=>{
            console.log('function with action argument' , store,next, action)
           return result;
        }
    }
}
console.log(logger())
console.log('object')