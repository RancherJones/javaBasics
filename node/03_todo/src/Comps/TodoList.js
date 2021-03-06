import React, { Component } from "react";
import Todo from "./Todo";
import styles from './TodoList.module.css';

export default class TodoList extends Component {
  
  getAllTodos(){
    let widgets = [];
    this.props.todos.forEach(todo => {
      widgets.push(<Todo title={todo.name} isDone={todo.done}/>);
      
    });
    return widgets;
  }

  render() {
    return (
      <div className={styles.center}>
        <div className={styles.conatiner}>
          {this.getAllTodos()}
        </div>
      </div>
    );
  }
}