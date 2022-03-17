import React, { Component } from "react"
import styles from './OneList.module.css'

export default class OneList extends Component{
  constructor(name){
    this.name = name
  }
  render(){
    return(
      <div className={styles.onelist}>
        
        <li className={styles.entry}>name</li>
      
      </div>
    )
  }
}