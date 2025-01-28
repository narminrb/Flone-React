import React from 'react'
import UiHeader from '../../../components/layout/UiLayout/UiHeader'
import BreadCrumbs from '../../../components/shared/BreadCrumbs'
import LoginLayout from '../../../components/layout/LoginLayout'


const LoginPage = () => {
  const breadCrumbs = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Login',
      link: '/login'
    }
  ]
  return (
    <div>
    <UiHeader/>
    <BreadCrumbs breadCrumb={breadCrumbs}/>
    <LoginLayout />
    </div>
  )
}

export default LoginPage