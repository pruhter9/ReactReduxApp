import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import axios from 'axios';
// import presentational components here

var navList = ["News", "Music", "Videos"];

export default class Sidebar extends React.Component {
	render() {
		return (
			<div id="sidebar">
				<ul>
					<li>
						<a href="#">News</a>
					</li>
					<li>
						<a href="#">Music</a>
					</li>
					<li>
						<a href="#">Videos</a>
					</li>
					<li>
						<a href="#">Weather</a>
					</li>
				</ul>
			</div>
		);
	}
}