import React from 'react'
import UiButton from '../../shared/UiButton'
import styles from './style.module.scss'

const Subscribe = () => {
  return (
    <div className="p-10">
    <div className="max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className={styles.subscribe}>Subscribe</h1>
            <p className={styles.under}>Subscribe to our newsletter to receive news on update</p>
        </div>
        <div className="mt-10 mx-auto">
            <form className="mx-auto ">
                <div className="flex items-center py-2">
                   <input 
                   className={styles.input}
                   type="email"
                        placeholder="Your Email Adress"/>
                </div>
                <div className="flex justify-center mx-auto py-5">
                <UiButton text="Subscribe" variant="subscribe"/>
                </div>
                   </form>
        </div>
    </div>
</div>

  )
}

export default Subscribe