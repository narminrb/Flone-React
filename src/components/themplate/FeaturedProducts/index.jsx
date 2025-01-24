import React, { useEffect, useState } from 'react'
import FloneCards from '../../shared/FloneCards'
import styles from "./style.module.scss"
import SkeletonLoading from '../../shared/SkeletonLoading'
import FilterButton from '../../shared/FilterButton'
const FeaturedProducts = () => {
  const data = [
    {
      id:1,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower one',
      price: 100,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
      discountPrice: 40,
    },
    {
      id:6,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower two',
      price: 350,
      pricePerCent: '20%',
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
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
      filterThing:'Best Sellers',
      discountPrice: 55,
    },
    {
      id:9,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower two',
      price: 500,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 60,
    },
    {
      id:10,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/3.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      title: 'Lorem ipsum flower two',
      price: 550,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 65,
    },
    {
      id:11,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      title: 'Lorem ipsum flower two',
      price: 600,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 70,
    },
    {
      id:12,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/6.jpg',
      title: 'Lorem ipsum flower two',
      price: 650,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 80,
    },
    {
      id:13,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/7.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/8.jpg',
      title: 'Lorem ipsum flower two',
      price: 700,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 90,
    },
    {
      id:14,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/8.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      title: 'Lorem ipsum flower two',
      price: 750,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'New Arrivals',
      discountPrice: 100,
    },
    {
      id:15,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/2.jpg',
      title: 'Lorem ipsum flower two',
      price: 800,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Sale Items',
      discountPrice: 110,
    },
    {
      id:16,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/4.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      title: 'Lorem ipsum flower two',
      price: 850,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Sale Items',
      discountPrice: 120,
    },
    {
      id:17,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/5.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/6.jpg',
      title: 'Lorem ipsum flower two',
      price: 900,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Sale Items',
      discountPrice: 130,
    },
    {
      id:18,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/7.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/8.jpg',
      title: 'Lorem ipsum flower two',
      price: 950,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Sale Items',
      discountPrice: 140,
    },
    {
      id:19,
      mainImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/8.jpg',
      hoverImage: 'https://flone.jamstacktemplates.dev/assets/img/product/flowers/1.jpg',
      title: 'Lorem ipsum flower two',
      price: 1000,
      pricePerCent: '20%',
      category: 'New',
      filterThing:'Sale Items',
      discountPrice: 150,
    }

  ]
   const [selectedFilters, setSelectedFilters] = useState(["Best Sellers"]); 
  const [filteredItems, setFilteredItems] = useState(data);

  let filters = ["New Arrivals", "Best Sellers", "Sale Items"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = data.filter((item) =>
        selectedFilters.includes(item.filterThing)
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...data]);
    }
  };

  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mt-20 mb-5">
      <h1 className="text-center text-[48px]">Featured Products</h1>
      <div className="grid grid-cols-1">
        <div className="col-span-6">
          <div className={styles.buttonsContainer}>
            {filters.map((category, idx) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`${styles.button} ${
                  selectedFilters?.includes(category) ? `${styles.active}` : ""
                }`}
                key={`filters-${idx}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.customContainer}>
        <div className="my-10 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          {loading ? (
            <SkeletonLoading count={4} />
          ) : (
            filteredItems.map((products, idx) => (
              <FloneCards
                key={`data-${idx}`}
                mainImage={products.mainImage}
                hoverImage={products.hoverImage}
                title={products.title}
                price={products.price}
                pricePerCent={products.pricePerCent}
                category={products.category}
                discountPrice={products.discountPrice}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts