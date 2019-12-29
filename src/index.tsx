import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Parlx from 'parlx.js';
import { Options } from 'parlx.js/lib/types';

type Props = {
  readonly settings: object;
  readonly callbacks: object;
  readonly parlxMove: (e: CustomEvent) => void;
  readonly className: string;
  readonly overlay: boolean;
  readonly children: ChildNode | ChildNode[];
};

export default function ReactParlx({
  settings,
  callbacks,
  parlxMove,
  className,
  overlay,
  children,
  ...props
}: Props) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    Parlx.init({ elements: current, settings, callbacks } as Options);

    const output = (e: CustomEvent) => parlxMove(e.detail.move);

    if (parlxMove)
      current!.addEventListener('parlxMove', output as EventListener);

    return () => current!.parlx.destroy();
  }, [callbacks, el, parlxMove, settings]);

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
