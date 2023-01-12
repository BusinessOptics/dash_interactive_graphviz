% Auto-generated: do not edit by hand
\name{dashInteractiveGraphviz}

\alias{dashInteractiveGraphviz}

\title{DashInteractiveGraphviz component}

\description{
An interactive graphviz renderer.  Renders the dot language in the browser. It allows for panning and zooming and node selection. Changes in the dot_source will be animated.  Graphviz is run in the browser via viz.js, so it can be computationally intensive.
}

\usage{
dashInteractiveGraphviz(id=NULL, dot_source=NULL, engine=NULL,
fit_button_content=NULL, fit_button_style=NULL,
persisted_props=NULL, persistence=NULL,
persistence_type=NULL, scale=NULL, selected=NULL,
selected_edge=NULL, selected_node=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{dot_source}{Character. The dot language source of the graph}

\item{engine}{Character. Changes the layout engine, see https://github.com/magjac/d3-graphviz#graphviz_engine
for more information}

\item{fit_button_content}{Character. The text content of the fit button, by default it is an small square unicode character.}

\item{fit_button_style}{Logical | numeric | character | named list | unnamed list. The style of the fit button.}

\item{persisted_props}{List of a value equal to: 'selected', 'selected_node', 'selected_edge', 'dot_source', 'engine's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.}

\item{persistence}{Logical | character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}

\item{scale}{A scaling factor for the initial zoom level}

\item{selected}{Character. [Pending Deprecation] The ID of the selected node.
Please use selected_node (or selected_edge for edges)}

\item{selected_edge}{Character. The ID of the selected edge.}

\item{selected_node}{Character. The ID of the selected node.}

\item{style}{Logical | numeric | character | named list | unnamed list. Styling to be applied to the graph container. You may want to change
your graphviz background to transparent.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

