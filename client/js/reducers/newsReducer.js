const categories = [
  'all',
  'business',
  'entertainment',
  'gaming',
  'general',
  'music',
  'science-and-nature',
  'sport',
  'technology',
];

export default function reducer(state = {
  articles: [],
  categories,
  dropdownEngaged: false,
  fetchingArticles: true,
  searchString: '',
  selectedCategory: '',
  selectedSource: '',
  sources: [],
}, action) {
  switch (action.type) {
    case 'FETCH_SOURCES_PENDING':
      return state;
    case 'FETCH_SOURCES_FULFILLED':
      return Object.assign(
        {},
        state,
        {
          sources: action.payload.sources,
        },
      );
    case 'FETCH_SOURCES_REJECTED':
      return state;
    case 'FETCH_ARTICLES_PENDING':
      return Object.assign(
        {},
        state,
        {
          fetchingArticles: true,
        },
      );
    case 'FETCH_ARTICLES_FULFILLED':
      console.log(action.payload.source);
      return Object.assign(
        {},
        state,
        {
          articles: action.payload.articles.articles,
          selectedSource: action.payload.source,
          fetchingArticles: false,
        },
      );
    case 'FETCH_ARTICLES_REJECTED':
      return state;
    case 'SEARCH_SOURCES_LIST':
      return Object.assign(
        {},
        state,
        {
          searchString: action.payload,
        },
      );
    case 'SEARCH_NEWS_CATEGORY':
      return Object.assign(
        {},
        state,
        {
          selectedCategory: action.payload,
          dropdownEngaged: !state.dropdownEngaged,
        },
      );
    case 'TOGGLE_FILTER_MENU':
      return Object.assign(
        {},
        state,
        {
          dropdownEngaged: !state.dropdownEngaged,
        },
      );
    default:
      return state;
  }
}
