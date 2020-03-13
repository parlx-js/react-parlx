import React from 'react';
import { Settings, Callbacks } from 'parlx.js/lib/types';
declare type Props = {
    readonly settings: Settings;
    readonly callbacks: Callbacks;
    readonly parlxMove: (e: CustomEvent) => void;
    readonly className: string;
    readonly overlay: boolean;
};
declare const ReactParlx: React.FC<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default ReactParlx;
