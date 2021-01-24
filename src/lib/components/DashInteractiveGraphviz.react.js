// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

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
        const {dot_source, size, engine} = this.props;
        const onNodeClick = (node) => this.onNodeClick(node);
        const onEdgeClick = (edge) => this.onEdgeClick(edge)
        try {
            d3.select('.graph')
                .graphviz()
                .engine(engine)
                .width(size.width)
                .height(size.height)
                .fit(true)
                .transition(
                    d3.transition('main').ease(d3.easeLinear).duration(1000)
                )
                .attributer(function (d, i, g) {
                    if (onNodeClick && d.attributes.class === 'node') {
                        this.onclick = () => onNodeClick(d.key);
                    } else if (onEdgeClick && d.attributes.class === 'edge'){
                        this.onclick = () => onEdgeClick(d.key);
                    }
                })
                .renderDot(dot_source);
        } catch (e) {
            //Syntax error, Do nothing.
        }
    }

    fitGraph() {
        d3.select('.graph').graphviz().fit(true).resetZoom();
    }

    onNodeClick(node) {
        const {setProps} = this.props;
        setProps({
            selected: node, 
            selected_node: node, 
            selected_edge : null
        });
    }

    onEdgeClick(edge) {
        const {setProps} = this.props;
        setProps({
            selected_node: null,                  
            selected_edge : edge
        });
    }


    componentDidUpdate(prevProps) {
        const {dot_source, size, engine} = this.props;

        if (
            dot_source != prevProps.dot_source ||
            size.height != prevProps.size.height ||
            size.width != prevProps.size.width ||
            engine != prevProps.engine
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
                        onClick={(e) => {
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
    fit_button_content: '\u25A3',
    fit_button_style: {},
    style: {},
    engine: 'dot',
    persisted_props: ['selected', 'selected_node', 'selected_edge', 'dot_source', 'engine'],
    persistence_type: 'local',
};

DashInteractiveGraphviz.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * [Pending Depreciation] The ID of the selected node.
     * Please use selected_node (or selected_edge for edges)
     */
    selected: PropTypes.string,
    /**
     * The ID of the selected node. 
     */
    selected_node: PropTypes.string,
    /**
     * The ID of the selected edge.
     */
    selected_edge: PropTypes.string,    
    /**
     * The dot language source of the graph
     */
    dot_source: PropTypes.string,
    /**
     * Styling to be applied to the graph container. You may want to change
     * your graphviz background to transparent.
     */
    engine: PropTypes.string,
    /**
     * Changes the layout engine, see https://github.com/magjac/d3-graphviz#graphviz_engine
     * for more information
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
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(
        PropTypes.oneOf(['selected', 'selected_node' ,'selected_edge' ,'dot_source', 'engine'])
    ),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),

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
