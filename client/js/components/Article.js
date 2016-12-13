import React, { PropTypes } from 'react';
import Fade from 'react-fade';

import ArticleTitle from './ArticleTitle';

const Articles = ({ article, source }) => (
  <Fade>
    <div className="article">
      <ArticleTitle
        author={!article.author ? source : article.author}
        publishedAt={article.publishedAt}
        title={article.title}
      />
      <img src={article.urlToImage} alt="Not Found" />
      <p>{article.description}</p>
      <a href={article.url} rel="noopener noreferrer">See More</a>
    </div>
  </Fade>
);

Articles.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
  }),
  source: PropTypes.string,
};

export default Articles;
