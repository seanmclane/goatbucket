import React, {Component} from 'react';
import {centerStyle, greenButton, blueButton} from '../styles';
import {css} from 'glamor';

import {signTransaction} from '../crypto';

signTransaction({
  to:
    'goat_04ab1594a3b65e440653b1a54952aee3cb7f5c41cb476f7ecd3ce58dc23cef0923beb45fc275ff4149cd9f0417f8ca885e882b3b68d00bab2988b22f2eaf7f6683ba3e672abd668e5788a8ecb4d055cd024f004ff03db06158f18e5bd02914685a',
  amount: 123456,
  sequence: 1,
});

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
