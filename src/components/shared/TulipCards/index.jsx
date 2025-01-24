import React from 'react'
import styles from './style.module.scss'
const TulipCards = ({image,heading,title,icon,price}) => {
  return (
    <div className={styles.root}>
        <div className={styles.mainCard}>
            <div className={styles.cardImage}>
                <img src={image} alt={heading}/>
            </div>
                <div className={styles.cardContent}>
                    <div>
                        <h1 className='text-3xl font-poppins font-bold'>{heading}</h1>
                        <p className='text-xl font-poppins text-gray-600'>{title}<span className='text-indigo-900'>${price}</span></p>
                    </div>
                <div className='border-2 border-customSecPink rounded-full  w-8 h-8 flex items-center justify-center cursor-pointer'>{icon}</div>
             </div>
        </div>
    </div>
  )
}

export default TulipCards