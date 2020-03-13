import React from 'react';
import { Settings, Callbacks } from 'parlx.js/lib/types';
declare type Props = {
    readonly settings: Settings;
    readonly callbacks: Callbacks;
    readonly parlxMove: (e: CustomEvent) => void;
    readonly className: string;
    readonly overlay: boolean;
    readonly children: ChildNode | ChildNode[];
};
declare const ReactParlx: React.FC<Props>;
export default ReactParlx;
