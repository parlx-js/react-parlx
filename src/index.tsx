import React, { useEffect, useRef, HTMLProps } from 'react';
import Parlx from 'parlx.js';
import type { Settings, Callbacks } from 'parlx.js';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
  readonly onParlxMove?: (e: CustomEvent) => void;
  readonly overlay?: boolean;
  readonly overlayProps?: HTMLProps<HTMLDivElement>;
}

const ReactParlx = ({
  settings,
  callbacks,
  overlay,
  onParlxMove,
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

    const output = (e: Event) => onParlxMove((e as CustomEvent).detail.move);

    if (onParlxMove) {
      current.addEventListener('parlxMove', output);
    }

    return () => {
      if (onParlxMove) {
        current.removeEventListener('parlxMove', output);
      }

      current.parlx.destroy();
    };
  }, [settings, callbacks, onParlxMove]);

  return (
    <div {...props} ref={el} className={className}>
      {overlay && <div {...overlayRest} className={overlayClassName} />}

      {children}
    </div>
  );
};

export default ReactParlx;
