import React, { Component } from "react"
import styles from './list.css'

export default class List extends Component{
  render(){
    return(
      <div className={styles.List}>
        <li>eins</li>
        <li>eins</li>
        <li>eins</li>
      </div>
    )
  }
}