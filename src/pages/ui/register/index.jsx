import React from 'react'
import UiHeader from '../../../components/layout/UiLayout/UiHeader'
import BreadCrumbs from '../../../components/shared/BreadCrumbs'
import RegisterLayout from '../../../components/layout/registerLayout'


const RegisterPage = () => {
  const breadCrumbs = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Register',
      link: '/register'
    }
  ]
  return (
    <div>
    <UiHeader/>
    <BreadCrumbs breadCrumb={breadCrumbs}/>
    <RegisterLayout />
    </div>
  )
}

export default RegisterPage