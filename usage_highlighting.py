"""
An example showing how to highlight a node on sleection
"""
import dash_interactive_graphviz
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)


app.layout = html.Div(
    [
        html.Div(
            dash_interactive_graphviz.DashInteractiveGraphviz(id="gv"),
            style=dict(flexGrow=1, position="relative"),
        )        
    ],
    style=dict(position="absolute", height="100%", width="100%", display="flex"),
)

# A simple list of edges
edges = [
    ("a", "b"),
    ("a", "c"),
    ("c", "b"),
    ("b", "a"),
]


@app.callback(Output("gv", "dot_source"), [Input("gv", "selected_node")])
def show_graph(selected):
    """
    Based on the selected node this generates the correct graphviz
    """
    
    # dictionary of all the nodes and if they are selected 
    nodes = {node: node == selected for edge in edges for node in edge}
    lines = [
        "digraph {",
        "node [style=filled];"        
    ]
    for node, selected in nodes.items():
        color= 'green' if selected else 'grey'
        lines.append(f'{node}[color={color}];')
    
    for f,t in edges:
        lines.append(f"{f}->{t};")

    lines.append("}")
    
    dot = "\n".join(lines)
    return dot

if __name__ == "__main__":
    app.run_server(debug=True)
