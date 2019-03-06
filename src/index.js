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

  const output = e => parlxMove(e.detail.move);

  useEffect(() => {
    Parlx.init({ elements: el.current, settings, callbacks });

    if (parlxMove) el.current.addEventListener('parlxMove', output);

    return () => el.current.parlx.destroy();
  }, []);

  return (
    <div {...props} className={className} ref={el}>
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
