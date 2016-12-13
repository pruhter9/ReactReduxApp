import React, { PropTypes } from 'react';

const SectionHeader = ({ section, newsSource }) => (
  <div className="section-header">
    <h3>{section}</h3>
    <h3 className="active-news-source">{newsSource}</h3>
  </div>
);

SectionHeader.propTypes = {
  section: PropTypes.string,
  newsSource: PropTypes.string,
};

export default SectionHeader;
