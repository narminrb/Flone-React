import React from 'react'
import styles from './style.module.scss'
const FloneCards = ({mainImage,pricePerCent,category,hoverImage,title,price,discountPrice}) => {
  return (
    <div className={styles.root}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={mainImage} alt={title} />
                <div className={styles.pinItem}>
                    <div>
                        <p className='text-customPink'>-{pricePerCent}</p>
                        <h2 className='text-sm mt-2 text-customPurple'>{category}</h2>
                    </div>
                </div>
                <div className={styles.HoverImg}>
                    <div className='w-full h-full'>
                        <img src={hoverImage} alt={title} />
                        <div className={styles.pinItem}>
                    <div>
                        <p className='text-customPink'>-{pricePerCent}</p>
                        <h2 className='text-md text-customPurple'>{category}</h2>
                    </div>
                </div>
                        <div className={styles.HoverImgItem}>
                            <div className='flex gap-2 items-center'>
                            <div className='w-10 h-10 flex justify-center bg-fuchsia-400  items-center rounded-full'>
                            <i className=" ri-eye-line text-white"></i>
                            </div>
                            <div className='w-10 h-10 flex justify-center bg-fuchsia-400  items-center rounded-full'>
                            <i className="ri-shopping-cart-line text-white"></i>
                            </div>
                            <div className='w-10 h-10 flex justify-center bg-fuchsia-400  items-center rounded-full'>
                            <i className="ri-git-pull-request-line text-white"></i>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <div>
                <p className='font-poppins text-md'>{title}</p>
                <h1 className='text-sm font-poppins'>
                    $ {price}- <span className='text-customPink'>${discountPrice}</span>
                </h1>
            </div>
            <div>
            <i className="ri-heart-line text-2xl text-customHearthstone"></i>
            </div>
        </div>
    </div>
  )
}

export default FloneCards