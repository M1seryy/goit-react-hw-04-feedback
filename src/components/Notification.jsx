import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const message = this.props.message;
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
