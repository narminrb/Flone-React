import React from 'react';

const FilterButton = ({ menuItems, filterItems, resetFilter }) => {
    return (
      <div className='flex justify-center mb-2'>
        {menuItems.map((val, index) => (
          <button
            key={`${val}-${index}`} // Ensure unique key
            onClick={() => filterItems(val)}
            className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
          >
            {val || 'Uncategorized'}
          </button>
        ))}
        <button
          onClick={resetFilter} // Use the reset function
          className='btn-dark p-1 px-2 mx-5 btn fw-bold'
        >
          All
        </button>
      </div>
    );
  };
  

export default FilterButton;
