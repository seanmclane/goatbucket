import React, {Component} from 'react';

import {css, $} from 'glamor';

const notificationStyle = css(
  {
    alignItems: 'flex-start',
    borderRadius: '5px',
    color: '#ffffff',
    display: 'flex',
    padding: '16px',
  },
  $(':not(:last-child)', {
    margin: '0 0 12px',
  })
);

const contentStyle = css({
  flex: '1 1 auto',
  margin: '0 12px 0 0',
  overflow: 'hidden',
  textoverflow: 'ellipsis',
});

const dismissStyle = css({
  webkitappearance: 'none',
  mozappearance: 'none',
  background: 'transparent',
  border: 0,
  color: 'inherit',
  cursor: 'pointer',
  display: 'block',
  flex: '0 0 auto',
  font: 'inherit',
  padding: 0,
});

class Notification extends Component {
  render() {
    return (
      <li {...notificationStyle} style={{backgroundColor: this.props.color}}>
        <p {...contentStyle}>{this.props.text}</p>
        <button {...dismissStyle} onClick={this.props.onDismissClick}>
          x
        </button>
      </li>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default Notification;
