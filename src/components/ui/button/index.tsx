import React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text = "btnText" }) => {
  return (
    <div className={styles.button}>
      <p className={styles.btn_text}>{text}</p>
    </div>
  )
}
