import React, {Component} from 'react';
import {centerStyle, greenButton, blueButton} from '../styles';
import {css} from 'glamor';

let fieldStyle = css({
  border: 'none',
  textAlign: 'center',
});

let inputStyle = css({
  display: 'block',
  minWidth: '500px',
  fontSize: '16px',
  padding: '10px',
  margin: '20px 0px',
  border: 'none',
  borderRadius: '5px',
});

export default function Txion(props) {
  return (
    <div {...centerStyle}>
      <h1>Send GoatNickels</h1>
      <fieldset {...fieldStyle}>
        <input {...inputStyle} placeholder="To" type="text" name="to" id="to" />
        <input {...inputStyle} placeholder="Amount" type="number" name="amount" id="amount" />
      </fieldset>
      <button className={greenButton}>Validate</button>
      <button className={blueButton}>Send</button>
    </div>
  );
}
