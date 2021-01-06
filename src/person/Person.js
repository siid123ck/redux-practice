import React from 'react';
import { connect } from 'react-redux';
import Persons from "./Persons"


 class Person extends React.Component {
     render(){
          console.log(this.props.persons)
         return (
             <div>
            <h1>Gentleman of the year</h1>
                 <Persons  addedPerson={this.props.onAddedPerson}/>
            {this.props.persons.map(person=>(
                <div onClick={()=>this.props.onDeletePerson(person.id)} key={person.id}>
                    <h2>{person.name}</h2>
                    <h2>{person.age}</h2>
     
                </div>
            ))}
             </div>
         )

     }
}

const mapStateToProps =state=>({
   persons:state.prs.persons
})

const mapDispatchToProps = dispatch=>({
onAddedPerson:(name, age)=>dispatch({type:"ADD", payload:{name:name, age:age}}),
onDeletePerson:(id)=>dispatch({type:"DELETE_PERSON", personID:id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Person);