import React, { useEffect, useRef, HTMLProps } from 'react';
import Parlx from 'parlx.js';
import { Settings, Callbacks } from 'parlx.js/lib/types';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
  readonly overlay?: boolean;
  readonly parlxMove?: (e: CustomEvent) => void;
  readonly overlayProps?: HTMLProps<HTMLDivElement>;
}

const ReactParlx: React.FC<Props> = ({
  settings,
  callbacks,
  overlay,
  parlxMove,
  className = 'parallax',
  overlayProps = {},
  children,
  ...props
}) => {
  const { className: overlayClassName = '', ...overlayRest } = overlayProps;

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    Parlx.init({ elements: current, settings, callbacks });

    const output = (e: CustomEvent) => parlxMove(e.detail.move);

    if (parlxMove) current.addEventListener('parlxMove', output);

    return () => current.parlx.destroy();
  }, [settings, callbacks, parlxMove]);

  return (
    <div {...props} ref={el} className={className}>
      {overlay && <div {...overlayRest} className={overlayClassName} />}

      {children}
    </div>
  );
};

export default ReactParlx;
