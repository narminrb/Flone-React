import React, { useEffect, useState } from "react";
import FloneCards from "../../shared/FloneCards";
import styles from "./style.module.scss";
import SkeletonLoading from "../../shared/SkeletonLoading";
import FilterButton from "../../shared/FilterButton";
import { getCardsApi } from "../../../http/api";

const FeaturedProducts = () => {
  const [cards, setCards] = useState([]); 
  const [selectedFilters, setSelectedFilters] = useState(["Best Sellers"]);
  const [filteredItems, setFilteredItems] = useState([]); 
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getCardsApi("/data").then((res) => {
      setCards(res); 
      setFilteredItems(res); 
    });
  }, []);

  console.log(cards); 

  const filters = ["New Arrivals", "Best Sellers", "Sale Items"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, cards]); 

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = cards.filter((item) =>
        selectedFilters.includes(item.filterThing)
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...cards]);
    }
  };


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
};

export default FeaturedProducts;
