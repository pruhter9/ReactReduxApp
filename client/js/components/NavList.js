import React, { PropTypes } from 'react';

import NavSection from './NavSection';

const NavList = ({ sections }) => (
  <ul>
    {sections.map((section, index) => (
      <NavSection key={index} item={section} />
    ))}
  </ul>
);

NavList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
};

export default NavList;
