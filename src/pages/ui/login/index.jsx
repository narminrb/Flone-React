import React from 'react'
import UiHeader from '../../../components/layout/UiLayout/UiHeader'
import BreadCrumbs from '../../../components/shared/BreadCrumbs'
import LoginLayout from '@/components/layout/LoginLayout'
import UiFooter from '@/components/layout/UiLayout/UiFooter'


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
    <UiFooter/>

    </div>
  )
}

export default LoginPage