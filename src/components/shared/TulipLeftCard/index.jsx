import React from 'react'
import styles from './style.module.scss'
import UiButton from '../UiButton'
const TulipLeftCard = ({image,heading,title,icon,price}) => {
  return (
    <div className={styles.root}>
        <div className={styles.mainCard}>
            <div className={styles.cardImage}>
                <img src={image} alt={heading}/>
            </div>
                <div className={styles.cardContent}>
                    <div>
                        <h2>-20% Off</h2>
                        <h1 className='text-2xl font-poppins font-semibold'>{heading}</h1>
                        <p className='text-xl font-poppins text-gray-600'>{title}</p>
                        <UiButton text='Shop Now' variant="pink"/>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default TulipLeftCard