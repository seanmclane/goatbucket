import React from 'react';
import {errorStyle, centerStyle, blueButton} from '../styles';
import {routerActions} from 'react-router-redux';

export default function Guide(props) {
  return (
    <div {...centerStyle} style={{maxWidth: '600px'}}>
      <h1>A quick start guide</h1>
      <h3>There are two ways to get GoatNickels into your new bucket:</h3>
      <ol>
        <li>Have your friend send some to your new account number.</li>
        <li>Start mining! Use your computing power to help GoatNickels grow and you'll get GoatNickels for it. Click the Mining link in the upper right to learn more.</li>
      </ol>
      <h3 {...errorStyle}>{`Backup the "keystore" file at HOME/.goatnickels/keystore.json, so you don't lose your bucket!`}</h3>
      <button className={blueButton} onClick={() => store.dispatch(routerActions.push('/wallet'))}>
        Got it!
      </button>
    </div>
  );
}