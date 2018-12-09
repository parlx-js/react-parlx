import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parlx from 'parlx.js';

export default class ReactParlx extends Component {
  el = React.createRef();

  componentDidMount() {
    const { options, parlxMove } = this.props;
    Parlx.init(this.el.current, options);

    if (parlxMove) this.el.current.addEventListener('parlxMove', this.output);
  }

  componentWillUnmount = () => this.el.current.parlx.destroy();

  output = e => this.props.parlxMove(e.detail.move);

  render() {
    const {
      className = 'parallax',
      style = {},
      overlay,
      children
    } = this.props;

    return (
      <div className={className} style={style} ref={this.el}>
        {overlay && <div className="overlay" />}
        {children}
      </div>
    );
  }
}

ReactParlx.propTypes = {
  options: PropTypes.object,
  parlxMove: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  overlay: PropTypes.bool,
  children: PropTypes.node
};
