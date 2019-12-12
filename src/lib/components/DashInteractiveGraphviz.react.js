// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// /**
//  * ExampleComponent is an example component.
//  * It takes a property, `label`, and
//  * displays it.
//  * It renders an input with the property `value`
//  * which is editable by the user.
//  */
// export default class DashInteractiveGraphviz extends Component {
//     render() {
//         const {id, label, setProps, value} = this.props;

//         return (
//             <div id={id}>
//                 ExampleComponent: {label}&nbsp;
//                 <input
//                     value={value}
//                     onChange={
//                         /*
//                          * Send the new value to the parent component.
//                          * setProps is a prop that is automatically supplied
//                          * by dash's front-end ("dash-renderer").
//                          * In a Dash app, this will update the component's
//                          * props and send the data back to the Python Dash
//                          * app server if a callback uses the modified prop as
//                          * Input or State.
//                          */
//                         e => setProps({ value: e.target.value })
//                     }
//                 />
//             </div>
//         );
//     }
// }

// DashInteractiveGraphviz.defaultProps = {};

// DashInteractiveGraphviz.propTypes = {
//     /**
//      * The ID used to identify this component in Dash callbacks.
//      */
//     id: PropTypes.string,

//     /**
//      * A label that will be printed when this component is rendered.
//      */
//     label: PropTypes.string.isRequired,

//     /**
//      * The value displayed in the input.
//      */
//     value: PropTypes.string,

//     /**
//      * Dash-assigned callback that should be called to report property changes
//      * to Dash, to make them available for callbacks.
//      */
//     setProps: PropTypes.func
// };

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import * as d3Graphviz from 'd3-graphviz';
import {withSize} from 'react-sizeme';

/**
 * An interactive graphviz renderer.
 *
 * Renders the dot language in the browser. It allows for panning and zooming
 * and node selection. Changes in the dot_source will be animated.
 *
 * Graphviz is run in the browser via viz.js, so it can be computationally
 * intensive.
 */
class DashInteractiveGraphviz extends Component {
    setGraph() {
        const {dot_source, size} = this.props;
        const onNodeClick = node => this.onNodeClick(node);
        try {
            d3.select('.graph')
                .graphviz()
                .width(size.width)
                .height(size.height)
                .fit(true)
                .transition(
                    d3
                        .transition('main')
                        .ease(d3.easeLinear)
                        .duration(1000)
                )
                .attributer(function(d, i, g) {
                    if (onNodeClick && d.attributes.class === 'node') {
                        this.onclick = () => onNodeClick(d.key);
                    }
                })
                .renderDot(dot_source);
        } catch (e) {
            //Syntax error, Do nothing.
        }
    }

    fitGraph() {
        d3.select('.graph')
            .graphviz()
            .fit(true)
            .resetZoom();
    }

    onNodeClick(node) {
        const {setProps} = this.props;
        setProps({selected: node});
    }

    componentDidUpdate(prevProps) {
        const {dot_source, size} = this.props;

        if (
            dot_source != prevProps.dot_source ||
            size.height != prevProps.size.height ||
            size.width != prevProps.size.width
        ) {
            this.setGraph();
        }
    }

    componentDidMount() {
        this.setGraph();
    }

    render() {
        const {id, style, fit_button_style, fit_button_content} = this.props;
        return (
            <div
                id={id}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    ...style,
                }}
            >
                <div
                    className="graph"
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>

                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    }}
                >
                    <span
                        onClick={e => {
                            this.fitGraph();
                        }}
                        style={{cursor: 'pointer', ...fit_button_style}}
                        title="Fit graph and reset zoom"
                    >
                        {fit_button_content}
                    </span>
                </div>
            </div>
        );
    }
}

DashInteractiveGraphviz.defaultProps = {
    // fit_button_content: '\u25A3',
    // fit_button_style: {},
    // style: {},
};

DashInteractiveGraphviz.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The ID of the selected node.
     */
    selected: PropTypes.string,
    /**
     * The dot language source of the graph
     */
    dot_source: PropTypes.string,
    /**
     * Styling to be applied to the graph container. You may want to change
     * your graphviz background to transparent.
     */
    style: PropTypes.any,
    /**
     * The style of the fit button.
     */
    fit_button_style: PropTypes.any,
    /**
     * The text content of the fit button, by default it is an small square unicode character.
     */
    fit_button_content: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default withSize({
    monitorHeight: true,
    refreshMode: 'debounce',
    refreshRate: 100,
})(DashInteractiveGraphviz);
