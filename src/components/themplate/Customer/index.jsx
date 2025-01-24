import React from 'react'
import styles from './style.module.scss'
const Customer = () => {
  return (
    <div className={styles.customContainer}>
  <div className="grid grid-cols-1 text-center items-center justify-center">
    <div className="max-w-[976px] mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-15 h-15">
          <img
            className="w-full h-full object-cover"
            src="https://flone.jamstacktemplates.dev/assets/img/testimonial/testi-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <p className={styles.smth}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className={styles.icon}>
      <i class="ri-signpost-line"></i>
      </div>
      <div className={styles.customer}>
        <p>John Doe</p>
        <h3>customer</h3>
      </div>
    </div>
  </div>
</div>

  )
}

export default Customer