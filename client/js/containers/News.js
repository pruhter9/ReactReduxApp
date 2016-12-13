import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchArticles,
  fetchSources,
  searchCategory,
  searchSources,
  toggleFilterMenu,
} from '../actions/newsActions';

import Article from '../components/news/Article';
import ArticleBreak from '../components/news/ArticleBreak';
import SectionBanner from '../components/news/SectionBanner';
import Source from '../components/news/Sources';

class News extends Component {
  componentWillMount() {
    this.props.fetchSources();
    this.props.fetchArticles();
  }

  render() {
    const {
      activeSection,
      articles,
      categories,
      dropdownEngaged,
      selectedCategory,
      searchString,
      selectedSource,
      sources,
    } = this.props;
    const regex = new RegExp(searchString, 'i');
    const newsArticles = articles.length === 0 ?
      <p>No articles</p> :
      articles.map((article, index) => (
        <div>
          <Article
            key={index}
            article={article}
            source={selectedSource}
          />
          <ArticleBreak key={`${article.time}${index}`} />
        </div>
      ));
    const newsSources = sources.length === 0 ?
      <p>No sources</p> :
      sources
        .filter(s => (
          regex.test(s.name) && s.category.indexOf(selectedCategory) !== -1
        ))
        .map(source => (
          <Source
            key={source.id}
            source={source}
            fetchArticles={this.props.fetchArticles}
          />
        ));

    return (
      <div className="news-container">
        <SectionBanner
          activeSection={activeSection}
          dropdownEngaged={dropdownEngaged}
          categories={categories}
          searchCategory={this.props.searchCategory}
          searchSources={this.props.searchSources}
          selectedCategory={selectedCategory}
          selectedSource={selectedSource}
          toggleFilterMenu={this.props.toggleFilterMenu}
        />
        <div className="news-content-container">
          <div className="article-column">
            {newsArticles}
          </div>
          <div className="sources-column">
            {newsSources}
          </div>
        </div>
      </div>
    );
  }
}

News.propTypes = {
  activeSection: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
  })),
  categories: PropTypes.arrayOf(PropTypes.string),
  dropdownEngaged: PropTypes.bool,
  fetchArticles: PropTypes.func,
  fetchSources: PropTypes.func,
  searchCategory: PropTypes.func,
  searchSources: PropTypes.func,
  searchString: PropTypes.string,
  selectedCategory: PropTypes.string,
  selectedSource: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    urlsToLogos: PropTypes.object,
  })),
  toggleFilterMenu: PropTypes.func,
};

function mapStateToProps(store) {
  return {
    activeNewsSource: store.user.activeNewsSource,
    activeSection: store.user.activeSection,
    articles: store.news.articles,
    categories: store.news.categories,
    dropdownEngaged: store.news.dropdownEngaged,
    searchString: store.news.searchString,
    selectedCategory: store.news.selectedCategory,
    selectedSource: store.news.selectedSource,
    sources: store.news.sources,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArticles,
    fetchSources,
    searchCategory,
    searchSources,
    toggleFilterMenu,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
