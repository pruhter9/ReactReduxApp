import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import axios from 'axios';
// import presentational components here

import UserCard from '../components/UserCard';

@connect((store) => {
	return {
		user: store.user
	}
})
export default class Banner extends React.Component {
	render() {
		let { user } = this.props;
		return (
			<div id="banner">
				<div class="container">
					<img src="../assets/logo.png" alt="logo" />
					<UserCard user={user}/>
				</div>
			</div>
		);
	}
}