import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const btntype = props.type ? props.type : "primary";
  const btncolor = props.color ? props.color : "info";
  let styleValue = Object.values(styles);
  let styleKey = Object.keys(styles);
  const styleArr = styleKey.reduce((acc, value, i) => (acc[value] = styleValue[i], acc), {});
  return <button className={styleArr[btntype] + " " + styleArr[btncolor]} {...props}>{props.text}</button>
}
