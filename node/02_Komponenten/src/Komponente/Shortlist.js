import React, { Component } from "react"
import styles from './ShortList.module.css'

export default class ShortList extends Component{
  render(){
    return(
      <div className={styles.shortlist}>
        <li>Coffe</li>
        <li>tea</li>
        <li>hot</li>
      </div>
    )
  }
}