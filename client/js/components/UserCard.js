import React from 'react';
// import presentational components here

export default class UserCard extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<div id="user-card">
				<div class="user-logo">
					<i class="fa fa-user" aria-hidden="true"></i>
				</div>
				<div class="user-greeting">
					<h5>Hello,</h5>
					<h3>{user.firstName}</h3>
				</div>
			</div>
		);
	}
}