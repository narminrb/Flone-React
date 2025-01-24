import React from 'react'
import TulipCards from '../../shared/TulipCards'
import styles from './style.module.scss'
import TulipLeftCard from '../../shared/TulipLeftCard'
import FlowerCards from '../../shared/FlowerCards'

const Flowers = () => {

    const RightTulips = [
        {
          id:2,
          heading: 'Flower',
          image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-35.png',
          title: 'Starting At',
          price: 99,
          icon:<i className="ri-arrow-right-long-line text-customSecPink"></i>
        },
        {
          id:3,
          heading: 'Flower',
          image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-36.png',
          title: 'Starting At',
          price: 99,
          icon:<i className="ri-arrow-right-long-line text-customSecPink"></i>
        },
        {
            id:3,
          heading: 'Flower',
          image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-37.png',
          title: 'Starting At',
          price: 99,
          icon:<i className="ri-arrow-right-long-line text-customSecPink"></i>
        }
      ]
  return (
    <div className={styles.customContainer}>
  <div className="grid grid-cols-3 gap-6 my-20 max-md:grid-cols-1">
    {RightTulips &&
      RightTulips.map((item, index) => (
        <FlowerCards
          key={index}
          image={item.image}
          heading={item.heading}
          title={item.title}
          price={item.price}
          icon={item.icon}
        />
      ))}
  </div>
</div>

  )
}

export default Flowers