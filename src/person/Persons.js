import React, { Component } from 'react'

 class Person extends Component {
    state = {
        name:"", 
        age:""
    }

    inputChangeHandler=event=>{
        const {name, value}=event.target;
        
        // console.log(event.target, name, value)
        this.setState({[name]:value})
    }

    render() {
        const {name, age} = this.state;
        return (
            <div>
                <div className="form-group">
                    <input onChange={this.inputChangeHandler} type="text" name="name" placeholder="name" value={name} />
                    <label>Name</label>
                    <input onChange={this.inputChangeHandler} type="text" name="age" placeholder="age" value={age} />
                    <label>Age</label>
                    <button onClick={()=>this.props.addedPerson(this.state.name, this.state.age)}>add</button>
                    
                </div>
            </div>
        )
    }
}

export default Person;