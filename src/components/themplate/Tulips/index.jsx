import React from 'react'
import TulipCards from '../../shared/TulipCards'
import styles from './style.module.scss'
import TulipLeftCard from '../../shared/TulipLeftCard'

const Tulips = () => {
    const LeftTulipElements =[
        {
            id:1,
            heading: 'New Tulip',
            image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-32.png',
            title: 'Best For Your Mind.',
        }
    ]

    const RightTulips = [
        {
          id:2,
          heading: 'PINK TULIP',
          image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-33.png',
          title: 'Starting At',
          price: 99,
          icon:<i className="ri-arrow-right-long-line text-customSecPink"></i>
        },
        {
          id:3,
          heading: 'PINK TULIP',
          image: 'https://flone.jamstacktemplates.dev/assets/img/banner/banner-34.png',
          title: 'Starting At',
          price: 99,
          icon:<i className="ri-arrow-right-long-line text-customSecPink"></i>
        },
      ]
  return (
    <div className={styles.customContainer}>
        <div className='grid grid-cols-12 gap-4 my-20'>
        <div className='col-span-6 max-md:col-span-12'>
          <div className='flex flex-col gap-8'>
                      {
              LeftTulipElements &&
              LeftTulipElements.map((item, index) => (
                <TulipLeftCard               
                  key={index}
                  image={item.image}
                  heading={item.heading}
                  title={item.title}
                  price={item.price}
                />
              ))
            }

          </div>
        </div>
        <div className='col-span-6 max-md:col-span-12'>
        <div className='flex flex-col gap-4'>
                      {
              RightTulips &&
              RightTulips.map((item, index) => (
                <TulipCards
                  key={index}
                  image={item.image}
                  heading={item.heading}
                  title={item.title}
                  price={item.price}
                  icon={item.icon}
                />
              ))
            }

          </div>
      </div>
    </div>
    </div>
  )
}

export default Tulips