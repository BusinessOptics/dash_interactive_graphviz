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
- style (boolean | number | string | dict | list; optional): Styling to be applied to the graph container. You may want to change
your graphviz background to transparent.
- fit_button_style (boolean | number | string | dict | list; optional): The style of the fit button.
- fit_button_content (string; optional): The text content of the fit button, by default it is an small square unicode character."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selected=Component.UNDEFINED, dot_source=Component.UNDEFINED, style=Component.UNDEFINED, fit_button_style=Component.UNDEFINED, fit_button_content=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selected', 'dot_source', 'style', 'fit_button_style', 'fit_button_content']
        self._type = 'DashInteractiveGraphviz'
        self._namespace = 'dash_interactive_graphviz'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selected', 'dot_source', 'style', 'fit_button_style', 'fit_button_content']
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
