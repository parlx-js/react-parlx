import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Parlx from 'parlx.js';

export default function ReactParlx({
  settings,
  callbacks,
  parlxMove,
  className,
  overlay,
  children,
  ...props
}) {
  const el = useRef();

  useEffect(() => {
    const current = el.current;

    Parlx.init({ elements: current, settings, callbacks });

    const output = e => parlxMove(e.detail.move);

    if (parlxMove) current.addEventListener('parlxMove', output);

    return () => current.parlx.destroy();
  }, [callbacks, parlxMove, settings]);

  return (
    <div {...props} ref={el} className={className}>
      {overlay && <div className="overlay" />}
      {children}
    </div>
  );
}

ReactParlx.propTypes = {
  settings: PropTypes.object,
  callbacks: PropTypes.object,
  parlxMove: PropTypes.func,
  className: PropTypes.string,
  overlay: PropTypes.bool,
  children: PropTypes.node,
  props: PropTypes.object
};

ReactParlx.defaultProps = {
  className: 'parallax'
};
