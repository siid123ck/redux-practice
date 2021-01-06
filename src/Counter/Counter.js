import React from 'react';
import {connect} from "react-redux";
// import * as actionTypes from "../redux/actionTypes";
import {increament, decreament, add, sub, store_result, delete_result} from "../redux/actionTypes"

  class Counter extends React.Component {
   
    render(){
        console.log(this.props.results)
        return (
            <div>
                <h1>Counter value: {this.props.value} </h1>
                <button onClick={this.props.increamentHandler}>Add by one</button>
                <button onClick={this.props.decreamentHandler}>Decrease by one</button>
                <button onClick={this.props.addHandler}>Add random value</button>
                <button onClick={this.props.subHandler}>Subtract random value</button>
                <button onClick={()=>this.props.storeHandler(this.props.value)}>store result</button>
                <ul>
                    {this.props.results.map((result)=>(
                        <li onClick={()=>this.props.deleteHandler(result.id)} key={result.id}> {result.val}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    value:state.ctr.count, 
    results:state.store_res.results
})
const mapDispatchToProps = dispatch=>({
    increamentHandler:()=>dispatch(increament()),
    decreamentHandler:()=>dispatch(decreament()),
    addHandler:()=>dispatch(add(3)),
    subHandler:()=>dispatch(sub(6)),
    storeHandler:(result)=>dispatch(store_result(result)), // if key and value are same we can write just one
    deleteHandler:(id)=>dispatch(delete_result(id) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);