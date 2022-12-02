import React from "react";
import classes from './MyInpute.module.css'
const MyInpute = (props) => {
   return (
      <input className={classes.myInpute} {...props} />
   )
}

export default MyInpute;