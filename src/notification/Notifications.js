import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Notification from './Notification';
import {removeNotification} from './NotificationActions';

import {css} from 'glamor';

const notificationsStyle = css({
    bottom: '5vh',
    position: 'fixed',
    right: '5vw',
});

function Notifications(props) {
  return (
    <ul {...notificationsStyle}>
      {props.notifications.map(notification => {
        return (
          <Notification 
            {...notification} 
            key={notification.id} 
            onDismissClick={() => props.removeNotification(notification.id)} 
          />
        );
      })}
    </ul>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeNotification}, dispatch);
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
