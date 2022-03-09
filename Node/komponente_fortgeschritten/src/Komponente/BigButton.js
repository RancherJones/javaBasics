import React, { Component } from "react"
import styles from './BigButton.module.css'

export default class BigButton extends Component{
  render(){
    return (<div className={styles.heading}>
      <button type="button" className={styles.button__design}>button</button>
    </div>)
  }

}