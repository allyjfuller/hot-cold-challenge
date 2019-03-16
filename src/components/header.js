import React from 'react';

import TopNavbar from './top-navbar';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNavbar
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}