import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH, ALL
import dash_interactive_graphviz

N = 3
app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div(
    [
        html.Div(
    [
       dcc.Textarea(id=dict(type="agraph", index=i),value=f"""
digraph  {{
node[style="filled"]
{i}
}}
       """,style=dict(flexGrow=1, position="relative")),
       dash_interactive_graphviz.DashInteractiveGraphviz(id=dict(type="gv",index=i),engine="dot",style=dict(flexGrow=1, position="relative")),
       html.P(id = dict(type="clicked",index=i))
    ],
    style=dict(height=f"200px", display="flex"),) for i in range(N)]
,style=dict(width="100%", heigth="100%"))

@app.callback(
    Output(dict(type="gv",index=MATCH),"dot_source"),
    Input(dict(type="agraph",index=MATCH),"value")
)
def update_gv(agraph):
    return agraph

@app.callback(
    Output(dict(type="clicked",index=MATCH), "children"),
    Input(dict(type="gv",index=MATCH), "selected_node"),
    Input(dict(type="gv",index=MATCH), "selected_edge")
)
def output_click(node, edge):
    return [f"{node=}", html.Br(), f"{edge=}"]

if __name__ == "__main__":
    app.run_server(debug=True)