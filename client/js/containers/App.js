import React from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

// import actions here
// import { functionName } from '../actions/actionFile'
// to import all actions
// import * as action from '../actions/actionFile'

import Banner from './Banner';
import Sidebar from './Sidebar';
import NewsContainer from './NewsContainer';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Banner />
				<div id="main">
					<Sidebar />
					<NewsContainer />
					<div class="clearfix"></div>
				</div>
			</div>
		);
	}
}