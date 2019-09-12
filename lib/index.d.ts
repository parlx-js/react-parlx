/// <reference types="react" />
import PropTypes from 'prop-types';
declare type Props = {
    settings: object;
    callbacks: object;
    parlxMove: (e: CustomEvent) => any;
    className: string;
    overlay: boolean;
    children: ChildNode | ChildNode[];
};
declare function ReactParlx({ settings, callbacks, parlxMove, className, overlay, children, ...props }: Props): JSX.Element;
declare namespace ReactParlx {
    var propTypes: {
        settings: PropTypes.Requireable<object>;
        callbacks: PropTypes.Requireable<object>;
        parlxMove: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        overlay: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        props: PropTypes.Requireable<object>;
    };
    var defaultProps: {
        className: string;
    };
}
export default ReactParlx;
