import React from 'react';
import {connect} from "react-redux";

  class Counter extends React.Component {
   
    render(){
        return (
            <div>
                <h1>Counter value: {this.props.value} </h1>
                <button onClick={this.props.increamentHandler}>Add by one</button>
                <button onClick={this.props.decreamentHandler}>Decrease by one</button>
                <button onClick={this.props.addHandler}>Add random value</button>
                <button onClick={this.props.subHandler}>Subtract random value</button>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    value:state.count
})
const mapDispatchToProps = dispatch=>({
    increamentHandler:()=>dispatch({type:"INCREAMENT"}),
    decreamentHandler:()=>dispatch({type:"DECREAMENT"}),
    addHandler:()=>dispatch({type:"ADD", value:3}),
    subHandler:()=>dispatch({type:"SUB", value:3})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);