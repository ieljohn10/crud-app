import { Banner } from "../../components/ui/banner"
import styles from "./home.module.scss"

import React from "react"

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Banner />
    </div>
  )
}
