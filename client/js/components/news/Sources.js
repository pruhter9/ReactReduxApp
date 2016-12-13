import React, { PropTypes } from 'react';

import SourceHeader from './SourceHeader';

const Sources = ({ source, fetchArticles }) => (
  <button
    className="news-source"
    onClick={() => fetchArticles(source.id, source.name)}
  >
    <SourceHeader
      logo={source.urlsToLogos.medium}
      name={source.name}
      url={source.url}
      category={source.category}
    />
    <p>{source.description}</p>
  </button>
);

Sources.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  source: PropTypes.shape({
    category: PropTypes.string,
    desciption: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    urlsToLogos: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }).isRequired,
};

export default Sources;
