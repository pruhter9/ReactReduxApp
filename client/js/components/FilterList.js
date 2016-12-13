import React, { PropTypes } from 'react';

import FilterItem from './FilterItem';

const FilterList = ({
  categories,
  dropdownEngaged,
  searchCategory,
  selectedCategory,
}) => (
  <ul className={dropdownEngaged ? 'active' : 'hidden'}>
    {!selectedCategory ?
      categories
        .filter(cat => (
          cat !== 'all'
        ))
        .map(cat => (
          <FilterItem
            key={cat}
            category={cat}
            searchCategory={searchCategory}
          />
        )) :
      categories
        .map(cat => (
          <FilterItem
            key={cat}
            category={cat}
            searchCategory={searchCategory}
          />
        ))
    }
  </ul>
);

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  dropdownEngaged: PropTypes.bool,
  searchCategory: PropTypes.func,
  selectedCategory: PropTypes.string,
};

export default FilterList;
