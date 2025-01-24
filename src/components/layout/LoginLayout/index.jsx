import React from 'react'
import LoginHeader from './LoginHeader'
import LoginFooter from './LoginFooter'

const LoginLayout = ({children}) => {
  return (
    <>
    <LoginHeader />
    <main>
        {children}
    </main>
    <LoginFooter />

    </>
  )
}

export default LoginLayout