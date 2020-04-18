# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashInteractiveGraphviz(Component):
    """A DashInteractiveGraphviz component.
An interactive graphviz renderer.

Renders the dot language in the browser. It allows for panning and zooming
and node selection. Changes in the dot_source will be animated.

Graphviz is run in the browser via viz.js, so it can be computationally
intensive.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- selected (string; optional): The ID of the selected node.
- dot_source (string; optional): The dot language source of the graph
- engine (string; default 'dot'): Styling to be applied to the graph container. You may want to change
your graphviz background to transparent.
- style (boolean | number | string | dict | list; optional): Changes the layout engine, see https://github.com/magjac/d3-graphviz#graphviz_engine
for more information
- fit_button_style (boolean | number | string | dict | list; optional): The style of the fit button.
- fit_button_content (string; default '\u25A3'): The text content of the fit button, by default it is an small square unicode character.
- persistence (boolean | string | number; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- persisted_props (list of a value equal to: 'selected', 'dot_source', 'engine's; default ['selected', 'dot_source', 'engine']): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selected=Component.UNDEFINED, dot_source=Component.UNDEFINED, engine=Component.UNDEFINED, style=Component.UNDEFINED, fit_button_style=Component.UNDEFINED, fit_button_content=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selected', 'dot_source', 'engine', 'style', 'fit_button_style', 'fit_button_content', 'persistence', 'persisted_props', 'persistence_type']
        self._type = 'DashInteractiveGraphviz'
        self._namespace = 'dash_interactive_graphviz'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selected', 'dot_source', 'engine', 'style', 'fit_button_style', 'fit_button_content', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashInteractiveGraphviz, self).__init__(**args)
