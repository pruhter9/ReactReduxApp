import React from 'react';
// import presentational components here

export default class NewsTile extends React.Component {
	render() {
		const { source, fetchArticles } = this.props;
		const url = source.url.slice(source.url.indexOf("//") + 2);
		return (
			<div class="news-tile" onClick={(e) => fetchArticles(source.id, source.name)}>
				<div class="source">
					<div class="source-logo">
						<img src={source.urlsToLogos["medium"]} alt="logo" />
					</div>
					<div class="source-description">
						<h3>{source.name}</h3>
						<a href={source.url} target="_blank" onClick={(e) => e.stopPropagation()}>{url}</a>
						<h5>{source.category}</h5>
					</div>
					<div class="clearfix"></div>
				</div>
				<p>{source.description}</p>
			</div>
		);
	}
}