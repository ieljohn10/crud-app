import styles from "./card.module.scss"
import React from "react"

interface CardProps {
  img: string
  text: string
  price: number
  currency: string
}

export const Card: React.FC<CardProps> = ({
  img,
  text = "pricename",
  price = 0.0,
  currency = "php",
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={text} />
      <div className={styles.cardDesc}>
        <p className={styles.cardTitle}>{text}</p>
        <p className={styles.price}>
          <span className={styles.currency}>{currency}</span>
          {price}
        </p>
      </div>
    </div>
  )
}
