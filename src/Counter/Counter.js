import React from 'react';
import {connect} from "react-redux";
import * as actionTypes from "../redux/actionTypes";

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
                <button onClick={this.props.storeHandler}>store result</button>
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
    value:state.count, 
    results:state.results
})
const mapDispatchToProps = dispatch=>({
    increamentHandler:()=>dispatch({type:actionTypes.INCREAMENT}),
    decreamentHandler:()=>dispatch({type:actionTypes.DECREAMENT}),
    addHandler:()=>dispatch({type:actionTypes.ADD, value:3}),
    subHandler:()=>dispatch({type:actionTypes.SUB, value:3}),
    storeHandler:()=>dispatch({type:actionTypes.STORE_RESULT}),
    deleteHandler:(id)=>dispatch({type:actionTypes.DELETE_RESULT, resultID:id} ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);