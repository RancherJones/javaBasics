import React, { Component } from "react";
import styles from './Todo.module.css';

export default class Todo extends Component {
  state = { } 
  render(){
    return(
      <div className={styles.container}>
        <div>Einkaufen</div>
        <div>Icon</div>
      </div>
    );
  }
}