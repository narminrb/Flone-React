import React from 'react'
import HomeBanner from '../../../components/themplate/HomeBanner'
import FeaturedProducts from '../../../components/themplate/FeaturedProducts'
import Tulips from '../../../components/themplate/Tulips'
import Flowers from '../../../components/themplate/Flowers'
import Customer from '../../../components/themplate/Customer'
import Subscribe from '../../../components/themplate/Subscribe'

const HomePage = () => {
  return (
    <div>
        <HomeBanner />
        <Tulips />
        <FeaturedProducts />
        <Customer/>
        <Flowers />
        <Subscribe/>
    </div>
  )
}

export default HomePage