% Auto-generated: do not edit by hand
\name{dashInteractiveGraphviz}

\alias{dashInteractiveGraphviz}

\title{DashInteractiveGraphviz component}

\description{
An interactive graphviz renderer.  Renders the dot language in the browser. It allows for panning and zooming and node selection. Changes in the dot_source will be animated.  Graphviz is run in the browser via viz.js, so it can be computationally intensive.
}

\usage{
dashInteractiveGraphviz(id=NULL, selected=NULL, dot_source=NULL, style=NULL, fit_button_style=NULL,
fit_button_content=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{selected}{Character. The ID of the selected node.}

\item{dot_source}{Character. The dot language source of the graph}

\item{style}{Logical | numeric | character | named list | unnamed list. Styling to be applied to the graph container. You may want to change
your graphviz background to transparent.}

\item{fit_button_style}{Logical | numeric | character | named list | unnamed list. The style of the fit button.}

\item{fit_button_content}{Character. The text content of the fit button, by default it is an small square unicode character.}
}
