import React from 'react'
import styles from "./style.module.scss"
import clsx from 'clsx'

const UiButton = ({children, loading, text,type,variant, className,...props}) => {
  return (
    <button 
    {...props}
    type={type} className={clsx(styles.btn, styles[variant],className)}>
        {loading ? "Loading..." : null}
        {children ? children : text}
    </button>
  )
}

export default UiButton