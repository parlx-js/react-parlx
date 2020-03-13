import React from 'react';
declare type Props = {
    readonly settings: object;
    readonly callbacks: object;
    readonly parlxMove: (e: CustomEvent) => void;
    readonly className: string;
    readonly overlay: boolean;
    readonly children: ChildNode | ChildNode[];
};
declare const ReactParlx: React.FC<Props>;
export default ReactParlx;
