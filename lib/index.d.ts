import PropTypes from 'prop-types';
declare type Props = {
    readonly settings: object;
    readonly callbacks: object;
    readonly parlxMove: (e: CustomEvent) => void;
    readonly className: string;
    readonly overlay: boolean;
    readonly children: ChildNode | ChildNode[];
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
