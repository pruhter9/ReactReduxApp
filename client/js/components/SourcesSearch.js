import React from 'react';
// import presentational components here

export default class SourcesSearch extends React.Component {
	render() {
		let { search, searchCategory, dropdown, filter, toggleFilterMenu } = this.props;
		let categories = [
			'business', 
			'entertainment', 
			'gaming', 'general', 
			'music', 
			'science-and-nature', 
			'sport', 
			'technology'
		];
		let defaultCategory;

		if (searchCategory) {
			defaultCategory = searchCategory;
			categories.unshift('all');
		} else {
			defaultCategory = 'category'
		}
		
		let listDisplay = {
			display: "none"
		}
		let dropdownStyle = {
			borderLeft: "none"
		}
		let inputStyle = {
			fontSize: "0.9em"
		}

		if (dropdown) {
			listDisplay = {
				display: "block"
			};
			dropdownStyle = {
				border: "1px solid #6AABBA",
				borderRadius: 0
			};
			let inputStyle = {
				borderRight: "none"
			}
		}

		return (
			<div class="sources-search">
				<div class="search-container">
					<i class="fa fa-search" aria-hidden="true"></i>
					<input 
						type="text"  
						placeholder="Search sources"
						onChange={(e) => search(e.target.value)}
						style={inputStyle}
					/>
					<div class="dropdown" style={dropdownStyle}>
						<a href="#" onClick={(e) => toggleFilterMenu()}>{defaultCategory}</a>
						<ul style={listDisplay}>
							{categories.map((category) => {
								return (
									<li key={category}>
										<a href="#" onClick={(e) => filter(category)}>{category.replace('-', ' ')}</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}