import React, { Component } from "react"
import styles from './Picture.module.css'

export default class Picture extends Component{
  render(){
    return(
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img id={styles.image} src='./Karte.png'></img>
          <div className={styles.content}>
            <h1>John Doe</h1>  
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    )
  }
}