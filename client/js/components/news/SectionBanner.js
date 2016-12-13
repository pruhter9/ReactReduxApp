import React, { PropTypes } from 'react';

import SearchBar from './SearchBar';
import SectionHeader from './SectionHeader';

const SectionBanner = ({
  activeSection,
  categories,
  dropdownEngaged,
  searchCategory,
  searchSources,
  selectedCategory,
  selectedSource,
  toggleFilterMenu,
}) => (
  <div className="section-banner">
    <SectionHeader
      section={activeSection}
      newsSource={selectedSource}
    />
    <SearchBar
      categories={categories}
      dropdownEngaged={dropdownEngaged}
      searchCategory={searchCategory}
      searchSources={searchSources}
      selectedCategory={selectedCategory}
      toggleFilterMenu={toggleFilterMenu}
    />
  </div>
);

SectionBanner.propTypes = {
  activeSection: PropTypes.string,
  dropdownEngaged: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.string),
  searchCategory: PropTypes.func,
  searchSources: PropTypes.func,
  selectedCategory: PropTypes.string,
  selectedSource: PropTypes.string,
  toggleFilterMenu: PropTypes.func,
};

export default SectionBanner;
