import React, {Component} from 'react';
import {css} from 'glamor';

let logoStyle = css({
  position: 'absolute',
  top: '15px',
  left: '25px',
});

export default function Header(props) {
  return (
    <div>
      <h1 {...logoStyle}>GoatBucket</h1>
    </div>
  );
}
