import React from 'react';
import {errorStyle, centerStyle, blueButton} from '../styles';
import {routerActions} from 'react-router-redux';
import {css} from 'glamor';

import colors from '../styles/colors';

const listStyle = css({
  background: `${colors.blue}`,
  paddingTop: '25px',
  paddingBottom: '25px',
  paddingRight: '10px',
  borderRadius: '5px',
})

export default function Guide(props) {
  return (
    <div {...centerStyle} style={{maxWidth: '600px'}}>
      <h1>Getting Started</h1>
      <h3>There are two ways to get GoatNickels into your new bucket:</h3>
      <ol {...listStyle} >
        <li style={{textAlign: 'left'}}>Have your friend send some to your new account number.</li>
        <li style={{textAlign: 'left'}}>Start mining! Use your computing power to help GoatNickels grow and you'll get GoatNickels for it. Click the Mining link (TBD) in the upper right to learn more.</li>
      </ol>
      <h3 {...errorStyle}>{`Backup the "keystore" file at HOME/.goatnickels/keystore.json, so you don't lose your bucket!`}</h3>
      <button className={blueButton} onClick={() => store.dispatch(routerActions.push('/wallet'))}>
        Got it!
      </button>
    </div>
  );
}