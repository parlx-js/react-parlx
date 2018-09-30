import React, { Component } from 'react';
import Parlx from 'parlx.js';

export default class ReactParlx extends Component {
  constructor() {
    super();

    this.el = React.createRef();
  }

  componentDidMount() {
    const { options, parlxMove } = this.props;
    const parlx = new Parlx(this.el.current, options);

    if (parlxMove) this.el.current.addEventListener('parlxMove', this.output);
  }

  output = e => this.props.parlxMove(e.detail.move);

  render() {
    const { className, style, overlay, children } = this.props;

    return (
      <div className={className || 'parallax'} style={style} ref={this.el}>
        {overlay ? <div className="overlay" /> : null}
        {children}
      </div>
    );
  }
}
