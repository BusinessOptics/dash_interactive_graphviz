# Dash Interactive Graphviz

Dash Interactive Graphviz renders the [graphviz](https://www.graphviz.org/) or dot language in a a dash component.

> Graphviz is open source graph visualization software. Graph visualization is a way of representing structural information as diagrams of abstract graphs and networks. It has important applications in networking, bioinformatics, software engineering, database and web design, machine learning, and in visual interfaces for other technical domains.

It supports:

-   Displaying graphviz sources as a graph
-   Rendering is fully client side
-   Zooming and Panning around the graph (With a reset)
-   Selecting nodes
-   Animation between different graphs

## Usage

You can install with pip (or anything else)

```bash
pip install dash_interactive_graphviz
```

Usage is simple, below shows how to instantiate the component on its own.

```python
import dash_interactive_graphviz

dot_source = """
digraph  {
  node[style="filled"]
  a ->b->d
  a->c->d
}
"""

dash_interactive_graphviz.DashInteractiveGraphviz(
    id="graph",
    dot_source=dot_source
)
```

When a node is clicked the `selected` property will change, this allows you to
change elements of your Dash app when a node is selected. For example:

```python
@app.callback(
    Output( ..., ... ),
    [Input('graph', 'selected')]
)
def change_my_view(selected):
    # Do something with selected
```

Often you may want to update the dot_source based on the selected node. This is supported by Dash.
You can see a more complex example in usage.py.

You can change the layout engine through the `engine` prop. See
https://github.com/magjac/d3-graphviz#graphviz_engine for more information.

## Behaviour

The following behaviors are enabled:

-   When the dot_source is changed the graph will smoothly animate between the two states.
-   You can click and drag the graph around
-   You can zoom in and out with the scroll wheel
-   You can reset the graph position and zoom by clicking the reset icon in teh top right corner
-   The graph pane will size to whet ever it's parents size is, the graph will re-render but the re-render is debounced so as not to overload the browser.
-   You can select a node which will fire an update to any dash callbacks that are connected.
-   You can change the layout engine
