import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavSection = ({ item }) => (
  <li>
    <Link
      to={item.path}
      class={item.class}
      activeClassName="active"
    >
      {item.name}
    </Link>
  </li>
);

NavSection.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),
};

export default NavSection;
