import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  componentDidMount() {
    this.target = document.getElementById(this.props.target);
    console.log(this.target);
  }

  render() {
    if (this.target === undefined) return null;
    return ReactDOM.createPortal(this.props.children, this.target);
  }
}

export default Portal;
