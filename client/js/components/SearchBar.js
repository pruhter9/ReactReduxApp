import React, { PropTypes } from 'react';

import FilterList from './FilterList';

const SearchBar = ({
  categories,
  dropdownEngaged,
  searchCategory,
  searchSources,
  selectedCategory,
  toggleFilterMenu,
}) => (
  <div className="searchbar">
    <i className="fa fa-search" aria-hidden="true" />
    <input
      onChange={e => searchSources(e.target.value)}
      placeholder="Search sources"
    />
    <button
      className={dropdownEngaged ? 'active' : ''}
      onClick={() => toggleFilterMenu()}
    >
      {!selectedCategory ? 'category' : selectedCategory}
    </button>
    <FilterList
      categories={categories}
      dropdownEngaged={dropdownEngaged}
      searchCategory={searchCategory}
      selectedCategory={selectedCategory}
    />
  </div>
);

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  dropdownEngaged: PropTypes.bool,
  searchCategory: PropTypes.func,
  searchSources: PropTypes.func,
  selectedCategory: PropTypes.string,
  toggleFilterMenu: PropTypes.func,
};

export default SearchBar;
