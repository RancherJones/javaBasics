import React, { Component } from "react";

class TaskAdder extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue:"test"
    }
  }

  handleChange = (event)=>{
    this.setState({
      inputValue: event.target.value
    })
  }

  addTask = () =>{
    this.props.onTaskAdded(this.state.inputValue)
  }

  state = { }
  render(){
    return(
      <div>
        <input typer="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick = {this.addTask}>Save</button>
      </div>
    );
  }
}

export default TaskAdder;