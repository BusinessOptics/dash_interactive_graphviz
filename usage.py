import dash_interactive_graphviz
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

initial_dot_source = """
digraph  {
node[style="filled"]
a ->b->d
a->c->d
}
"""

app.layout = html.Div(
    [
        html.Div(
            dash_interactive_graphviz.DashInteractiveGraphviz(id="gv"),
            style=dict(flexGrow=1, position="relative"),
        ),
        html.Div(
            [
                html.H1(id="selected"),
                dcc.Textarea(
                    id="input",
                    value=initial_dot_source,
                    style=dict(flexGrow=1, position="relative"),
                ),
            ],
            style=dict(display="flex", flexDirection="column"),
        ),
    ],
    style=dict(position="absolute", height="100%", width="100%", display="flex"),
)


@app.callback(Output("gv", "dot_source"), [Input("input", "value")])
def display_output(value):
    return value


@app.callback(Output("selected", "children"), [Input("gv", "selected")])
def show_selected(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
