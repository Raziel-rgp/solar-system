/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import PropTypes from 'react';

class Title extends Component {
  render() {
    return (<h2>{ this.props.headline }</h2>);
  }
}

Title.protoTypes = {
  headline: PropTypes.string,
};

export default Title;
