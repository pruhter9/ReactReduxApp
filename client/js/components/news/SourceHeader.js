import React, { PropTypes } from 'react';

import { extractDomain } from '../../helpers/extractDomain';

const SourceHeader = ({ category, logo, name, url }) => (
  <div className="source-header">
    <div className="source-logo">
      <img src={logo} alt="source logo" />
    </div>
    <div className="source-info">
      <h4>{name}</h4>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropogation()}
      >
        {extractDomain(url)}
      </a>
      <h5>{category.replace(/-/g, ' ')}</h5>
    </div>
  </div>
);

SourceHeader.propTypes = {
  category: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default SourceHeader;
