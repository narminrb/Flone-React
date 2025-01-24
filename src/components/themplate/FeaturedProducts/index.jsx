import React, { useEffect, useState } from 'react'
import FloneCards from '../../shared/FloneCards'
import styles from "./style.module.scss"
import SkeletonLoading from '../../shared/SkeletonLoading'
const FeaturedProducts = () => {
  const [loading, setIsLoading] =useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const data = [
    {
      id:1,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower one',
      price: 100,
      pricePerCent: '20%',
      category: 'New',
      discountPrice: 20,
    },
    {
      id:2,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/3.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      title: 'Lorem ipsum flower four',
      price: 150,
      pricePerCent: '20%',
      category: 'New',
      discountPrice: 25,
    },
    {
      id:3,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/6.jpg',
      title: 'Lorem ipsum flower three',
      price: 200,
      pricePerCent: '30%',
      category: 'New',
      discountPrice: 30,
    },
    {
      id:4,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/7.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/8.jpg',
      title: 'Lorem ipsum flower two',
      price: 250,
      pricePerCent: '5%',
      category: 'New',
      discountPrice: 35,
    },
    {
      id:5,
      mainImage: '	https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/3.jpg',
      title: 'Lorem ipsum flower two',
      price: 300,
      pricePerCent: '20%',
      category: '',
      discountPrice: 40,
    },
    {
      id:6,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower two',
      price: 350,
      pricePerCent: '20%',
      category: 'New',
      discountPrice: 45,
    },
    {
      id:7,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/3.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      title: 'Lorem ipsum flower two',
      price: 400,
      pricePerCent: '20%',
      category: 'New',
      discountPrice: 50,
    },
    {
      id:8,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      title: 'Lorem ipsum flower two',
      price: 450,
      pricePerCent: '20%',
      category: '',
      discountPrice: 55,
    }
  ]
  return (
    <div className='mt-20 mb-5'>
        <h1 className='text-center text-[48px]'>
            Featured Products
        </h1>
        <div className='grid grid-cols-1'>
            <div className='col-span-6'>
                <div className='flex items-stretch gap-4 mt-6 justify-center'>
                <div><h2 className='text-[18px] font-[500]'>New Arrivals</h2></div>
                <div><h2 className='text-[18px] font-[500]'>Best Sellers</h2></div>
                <div><h2 className='text-[18px] font-[500]'>Sale Items</h2></div>
                </div>

            </div>

        </div>
      <div className={styles.customContainer}>
      <div className='my-10 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {   loading ? (
                  <SkeletonLoading count={4} />
                ) : (
                  data.map((item, index) => (
                    <FloneCards
                      key={index}
                      mainImage={item.mainImage}
                      hoverImage={item.hoverImage}
                      title={item.title}
                      price={item.price}
                      pricePerCent={item.pricePerCent}
                      category={item.category}
                      discountPrice={item.discountPrice}
                    />
                  ))
                )}

        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts