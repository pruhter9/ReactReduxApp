import React from 'react';
import { default as Fade } from 'react-fade';
// import presentational components here
import { timeConverter } from '../helpers/timeFormat';

export default class Article extends React.Component {
	render() {
		let { article } = this.props;
		let time = timeConverter(article.publishedAt);
		// const url = source.url.slice(source.url.indexOf("//") + 2);
		return (
			<Fade>
				<div class="article">
					<div class="title-block">
						<h2>{article.title}</h2>
						<h5>by</h5>
						<h4>{article.author}</h4>
						<h5>&middot; {time}</h5>
					</div>
					<div class="article-image">
						<img src={article.urlToImage} alt="image" />
					</div>
					<div class="article-description">
						<p>{article.description}</p>
						<a href={article.url} target="_blank">See More</a>
					</div>
				</div>
			</Fade>
		);
	}
}