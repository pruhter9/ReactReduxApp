import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Banner from './Banner';
import Nav from './Nav';

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="flex-center-container">
          <div id="main">
            <Nav />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  // activeSection: PropTypes.string,
  children: PropTypes.element,
};

DashboardContainer.defaultProps = {
  activeSection: 'News',
};

// function mapStateToProps(store) {
//   return {
//     activeSection: store.user.activeDashSection,
//   };
// }

export default connect()(DashboardContainer);
