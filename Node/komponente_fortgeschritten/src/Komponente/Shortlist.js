import React, { Component } from "react"
import OneList from "./OneList"
import styles from './ShortList.module.css'

export default class ShortList extends Component{
  render(){
    return(
      <div className={styles.shortlist}>
        <OneList></OneList>
        <OneList/>
        <OneList/>
      </div>
    )
  }
}