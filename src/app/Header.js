import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {css, $} from 'glamor';

let logoStyle = css({
  position: 'absolute',
  top: '15px',
  left: '25px',
});

let linkStyle = css(
  {
    position: 'absolute',
    top: '15px',
    right: '25px',
  },
  $('> h2', {
    display: 'inline-block',
    padding: '10px',
  }),
  $('> h2 > a', {
    color: '#fff',
    textDecoration: 'none',
  })
);

export default function Header(props) {
  return (
    <div>
      <h1 {...logoStyle}>GoatBucket</h1>
      <div {...linkStyle}>
        <h2>
          <NavLink to="/wallet">Wallet</NavLink>
        </h2>
        <h2>
          <NavLink to="/wallet">History</NavLink>
        </h2>
        <h2>
          <NavLink to="/txion">Send</NavLink>
        </h2>
      </div>
    </div>
  );
}
