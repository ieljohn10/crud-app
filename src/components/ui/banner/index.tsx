import React from "react"
import styles from "./banner.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Banner1, Banner2 } from "../../../assets/banner"
import { BannerCard } from "./component/BannerCard"

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  const bannerData = [
    {
      id: 1,
      img: Banner1,
      name: "Banner1",
    },
    {
      id: 2,
      img: Banner2,
      name: "Banner2",
    },
  ]

  return (
    <div className={styles.banner}>
      <Carousel showArrows={false} showStatus={false}>
        {bannerData.map((item) => {
          return <BannerCard key={item.id} img={item.img} altText={item.name} />
        })}
      </Carousel>
    </div>
  )
}
