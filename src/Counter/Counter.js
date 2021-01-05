import React from 'react';
import {connect} from "react-redux";

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
    increamentHandler:()=>dispatch({type:"INCREAMENT"}),
    decreamentHandler:()=>dispatch({type:"DECREAMENT"}),
    addHandler:()=>dispatch({type:"ADD", value:3}),
    subHandler:()=>dispatch({type:"SUB", value:3}),
    storeHandler:()=>dispatch({type:"STORE_RESULT"}),
    deleteHandler:(id)=>dispatch({type:"DELETE_RESULT", resultID:id} ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);