import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parlx from 'parlx.js';

export default class ReactParlx extends Component {
  el = React.createRef();

  componentDidMount() {
    const { settings, callbacks, parlxMove } = this.props;
    Parlx.init({ elements: this.el.current, settings, callbacks });

    if (parlxMove) this.el.current.addEventListener('parlxMove', this.output);
  }

  componentWillUnmount = () => this.el.current.parlx.destroy();

  output = e => this.props.parlxMove(e.detail.move);

  render() {
    const { className, style, overlay, children } = this.props;

    return (
      <div className={className} style={style} ref={this.el}>
        {overlay && <div className="overlay" />}
        {children}
      </div>
    );
  }
}

ReactParlx.propTypes = {
  settings: PropTypes.object,
  callbacks: PropTypes.object,
  parlxMove: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  overlay: PropTypes.bool,
  children: PropTypes.node
};

ReactParlx.defaultProps = {
  className: 'parallax',
  style: {}
};
