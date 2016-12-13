import React from 'react';

import NavList from '../components/NavList';

const navItems = [
  {
    path: 'dashboard/',
    name: 'News',
    class: 'news-link',
  },
  {
    path: 'dashboard/music',
    name: 'Music',
    class: 'music-link',
  },
  {
    path: 'dashboard/videos',
    name: 'Videos',
    class: 'video-link',
  },
  {
    path: 'dashboard/weather',
    name: 'Weather',
    class: 'weather-link',
  },
];

const Nav = () => (
  <div className="navbar">
    <NavList sections={navItems} />
  </div>
);

export default Nav;
