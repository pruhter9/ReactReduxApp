import axios from 'axios';
import cookie from 'react-cookie';

export function fetchArticles(sourceId = 'techcrunch', sourceName = 'Techcrunch') {
	return (dispatch) => {
		dispatch({type: "FETCH_ARTICLES_PENDING"})
		axios.get(`http://localhost:8888/articles/${sourceId}`)
			.then((response) => {
				dispatch({type: "FETCH_ARTICLES_FULFILLED", payload: {articles: response.data, source: sourceName}})
				// cookie.save('source', sourceId, {path: '/'});
			})
			.catch((err) => {
				dispatch({type: "FETCH_ARTICLES_REJECTED", payload: err})
			})
	}
}

export function fetchSources() {
	return (dispatch) => {
		dispatch({type: "FETCH_SOURCES_PENDING"})
		axios.get("http://localhost:8888/sources")
			.then((response) => {
				dispatch({type: "FETCH_SOURCES_FULFILLED", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_SOURCES_REJECTED", payload: err})
			})
	}
}

export function searchSources(searchString) {
	console.log("the search string is...", searchString);
	return (dispatch) => {
		dispatch({
			type: "SEARCH_SOURCES_LIST",
			payload: searchString
		})
	}
}

export function searchSourceCategory(category) {
	let searchStr = category === 'all' ? '' : category;
	return (dispatch) => {
		dispatch({
			type: "SEARCH_NEWS_CATEGORY",
			payload: searchStr
		})
	}
}

export function toggleFilterMenu() {
	return (dispatch) => {
		dispatch({
			type: "TOGGLE_FILTER_MENU"
		})
	}
}
// export other action functions as needed