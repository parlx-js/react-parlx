import React, { useEffect, useRef, HTMLProps } from 'react';
import Parlx from 'parlx.js';
import { Settings, Callbacks } from 'parlx.js/lib/types';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
  parlxMove?: (e: CustomEvent) => void;
  readonly overlay?: boolean;
  readonly overlayProps?: HTMLProps<HTMLDivElement>;
}

const ReactParlx = ({
  settings,
  callbacks,
  overlay,
  parlxMove,
  className = 'parallax',
  overlayProps = {},
  children,
  ...props
}: Props) => {
  const {
    className: overlayClassName = 'overlay',
    ...overlayRest
  } = overlayProps;

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    Parlx.init({ elements: current, settings, callbacks });

    const output = (e: Event) => parlxMove((e as CustomEvent).detail.move);

    if (parlxMove) {
      current.addEventListener('parlxMove', output);
    }

    return () => {
      if (parlxMove) {
        current.removeEventListener('parlxMove', output);
      }

      current.parlx.destroy();
    };
  }, [settings, callbacks, parlxMove]);

  return (
    <div {...props} ref={el} className={className}>
      {overlay && <div {...overlayRest} className={overlayClassName} />}

      {children}
    </div>
  );
};

export default ReactParlx;
