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

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current;

    Parlx.init({ elements, settings, callbacks });

    const output = (e: Event) => onParlxMove((e as CustomEvent).detail.move);

    if (onParlxMove) {
      elements.addEventListener('parlxMove', output);
    }

    return () => {
      if (onParlxMove) {
        elements.removeEventListener('parlxMove', output);
      }

      elements.parlx.destroy();
    };
  }, [settings, callbacks, onParlxMove]);

  return (
    <div {...props} ref={ref} className={className}>
      {overlay && <div {...overlayRest} className={overlayClassName} />}

      {children}
    </div>
  );
};

export default ReactParlx;
