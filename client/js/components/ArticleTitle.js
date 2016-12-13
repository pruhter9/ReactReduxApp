import React, { PropTypes } from 'react';

import { timeConverter } from '../helpers/timeFormat';

const ArticleTitle = ({ author, title, publishedAt }) => (
  <div className="article-title">
    <h2>{title}</h2>
    <div className="article-author">
      <h5>by</h5>
      <h4>{author}</h4>
      <h5>&middot; {timeConverter(publishedAt)}</h5>
    </div>
  </div>
);

ArticleTitle.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default ArticleTitle;
