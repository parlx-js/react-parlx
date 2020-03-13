import React, { useEffect, useRef } from 'react';
import Parlx from 'parlx.js';
import { Settings, Callbacks } from 'parlx.js/lib/types';

type Props = {
  readonly settings: Settings;
  readonly callbacks: Callbacks;
  readonly parlxMove: (e: CustomEvent) => void;
  readonly className: string;
  readonly overlay: boolean;
  readonly children: ChildNode | ChildNode[];
};

const ReactParlx: React.FC<Props> = ({
  settings,
  callbacks,
  parlxMove,
  className = 'parallax',
  overlay,
  children,
  ...props
}) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    Parlx.init({ elements: current, settings, callbacks });

    const output: EventListener = (e: CustomEvent) => parlxMove(e.detail.move);

    if (parlxMove) current.addEventListener('parlxMove', output);

    return () => current!.parlx.destroy();
  }, [callbacks, el, parlxMove, settings]);

  return (
    <div {...props} ref={el} className={className}>
      {overlay && <div className="overlay" />}
      {children}
    </div>
  );
};

export default ReactParlx;
