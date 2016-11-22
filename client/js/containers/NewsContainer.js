import React from 'react';
import { connect } from 'react-redux';
import { fetchSources, searchSources, searchSourceCategory, toggleFilterMenu, fetchArticles } from '../actions/newsActions';
// import store from '../store';
// import axios from 'axios';
// import presentational components here

import NewsTile from '../components/NewsTile';
import SourcesSearch from '../components/SourcesSearch';
import Article from '../components/Article'

@connect((store) => {
	return {
		sources: store.news.sources,
		searchString: store.news.searchString,
		searchCategory: store.news.searchCategory,
		dropdownEngaged: store.news.dropdownEngaged,
		articles: store.news.articles,
		selectedSource: store.news.selectedSource,
		fetchingArticles: store.news.fetchingArticles
	}
})
export default class NewsContainer extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchSources());
		this.props.dispatch(fetchArticles());
	}

	searchSources(str) {
		this.props.dispatch(searchSources(str));
	}

	searchCategory(category) {
		this.props.dispatch(searchSourceCategory(category));
	}

	toggleFilterMenu() {
		this.props.dispatch(toggleFilterMenu());
	}

	fetchSourceArticles(sourceId, sourceName) {
		this.props.dispatch(fetchArticles(sourceId, sourceName));
	}

	render() {		
		let { sources, searchString, searchCategory, dropdownEngaged, articles, selectedSource, fetchingArticles } = this.props;
		let filterSources = sources.filter((source) => {
			let category = source.category;
			let name = source.name.toUpperCase();
			let searchTerm = searchString.toUpperCase();
			return (name.indexOf(searchTerm) != -1) && (category.indexOf(searchCategory) != -1);
		});
		let newsSources, newsArticles, newsHeader;

		if (sources.length != 0) {
			newsSources = (
				<div class="news-sources">
					<div class="inner-scroll"></div>
					{filterSources.map(function(source) {
						return (
							<NewsTile 
								key={source.id} 
								source={source} 
								fetchArticles={this.fetchSourceArticles.bind(this)}
							/>
							);
						}, this)}
				</div>
			);
		}


		if (fetchingArticles) {
			newsArticles = (
				<div class="loading-articles">
					<p>
						<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
					</p>
				</div>
			);
		} else {
			newsArticles = (
				<div class="news-stories">
					<div class="scrollable"></div>
					{articles.map((article) => {
						return <Article key={article.url} article={article} />;
					})}
				</div>
			);
		}

		if (selectedSource) {
			newsHeader = (
				<div class="news-banner-header">
					<h2>NEWS</h2>
					<h2 class="source-header-name">{selectedSource}</h2>
				</div>
			);
		} else {
			newsHeader = (<div class="news-banner-header"><h2>NEWS</h2></div>);
		}

		let h = window.innerHeight - 133;
		let heightStyle = {
			height: h
		} 

		return (
			<div id="news-container">
				<div id="news-banner" class="section-banner">
					{newsHeader}
					<SourcesSearch 
						search={this.searchSources.bind(this)} 
						searchCategory={searchCategory} 
						dropdown={dropdownEngaged}
						filter={this.searchCategory.bind(this)}
						toggleFilterMenu={this.toggleFilterMenu.bind(this)}
					/>
					<div class="clearfix"></div>
				</div>
				<div class="news-stories-container" style={heightStyle}>
					{newsArticles}
				</div>
				<div class="news-sources-container" style={heightStyle}>
					{newsSources}
				</div>
			</div>
		);
	}
}