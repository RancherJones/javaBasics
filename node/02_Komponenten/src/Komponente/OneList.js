import React, { Component } from "react"
import styles from './OneList.module.css'

export default class OneList extends Component{
  render(){
    return(
      <div className={styles.onelist}>
        
        <li className={styles.entry}>eins</li>
      
      </div>
    )
  }
}