import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SiteLogo from '../components/SiteLogo';
import UserCard from '../components/UserCard';

class Banner extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="flex-center-container banner">
        <div className="banner-content">
          <SiteLogo />
          <UserCard user={user} />
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    activeSection: PropTypes.string,
  }),
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(mapStateToProps)(Banner);
