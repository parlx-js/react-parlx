import React, { Component } from 'react';
import Parlx from 'parlx.js';

export default class ReactParlx extends Component {
  constructor() {
    super();

    this.el = React.createRef();
  }

  componentDidMount() {
    const { options } = this.props;
    const parlx = new Parlx(this.el.current, options);

    if (this.props.parlxMove) {
      this.el.current.addEventListener('parlxMove', this.output);
    }
  }

  output = e => this.props.parlxMove(e.detail.move);

  render() {
    return (
      <div
        className={this.props.className || 'parallax'}
        style={this.props.style}
        ref={this.el}>
        {this.props.overlay ? <div className="overlay" /> : null}
        {this.props.children}
      </div>
    );
  }
}
