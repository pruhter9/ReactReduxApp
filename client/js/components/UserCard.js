import React, { PropTypes } from 'react';

const UserCard = ({ user }) => (
  <div className="user-card">
    <div className="user-logo">
      <i className="fa fa-user" aria-hidden="true" />
    </div>
    <div className="user-greeting">
      <h5>Hello,</h5>
      <h4>{user.firstName}</h4>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};

export default UserCard;
