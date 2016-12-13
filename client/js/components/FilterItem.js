import React, { PropTypes } from 'react';

const FilterItem = ({ category, searchCategory }) => (
  <li>
    <button
      onClick={() => searchCategory(category)}
    >
      {category.replace(/-/g, ' ')}
    </button>
  </li>
);

FilterItem.propTypes = {
  category: PropTypes.string,
  searchCategory: PropTypes.func,
};

export default FilterItem;
