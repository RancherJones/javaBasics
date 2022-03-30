import React, { Component } from "react";
import Todo from "./Todo";
import styles from './TodoList.module.css';

export default class TodoList extends Component {
  state = { }
  render() {
    return (
      <div className={styles.center}>
        <div className={styles.conatiner}>
          <Todo/>
          <Todo/>
          <Todo/>
        </div>
      </div>
    );
  }
}