import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import DashboardContainer from './containers/DashboardContainer';
import LoginContainer from './containers/LoginContainer';
import News from './containers/News';
import store from './store';

const app = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginContainer} />
        <Route path="dashboard" component={DashboardContainer}>
          <IndexRoute component={News} />
        </Route>
      </Route>
    </Router>
  </Provider>
, app);
