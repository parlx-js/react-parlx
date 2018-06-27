import React, { Component } from 'react';
import Parlx from 'parlx.js';

export default class ReactParlx extends Component {
  componentDidMount() {
    const { options } = this.props;
    new Parlx(this.el, options);

    if (this.props.parlxMove !== undefined)
      this.el.addEventListener('parlxMove', this.output);
  }

  output = e => this.props.parlxMove(e.detail.move);

  render() {
    return (
      <div
        className={this.props.className || 'parallax'}
        style={this.props.style}
        ref={el => (this.el = el)}>
        {this.props.overlay ? <div className="overlay" /> : null}
        {this.props.children}
      </div>
    );
  }
}
