import React from "react"
import styles from "../banner.module.scss"

interface BannerCardProps {
  img: string
  altText: string
}

export const BannerCard: React.FC<BannerCardProps> = ({ img, altText }) => {
  return (
    <div className={styles.banner_card}>
      <img src={img} alt={altText} />
    </div>
  )
}
