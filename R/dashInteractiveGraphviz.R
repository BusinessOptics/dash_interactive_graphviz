# AUTO GENERATED FILE - DO NOT EDIT

dashInteractiveGraphviz <- function(id=NULL, selected=NULL, dot_source=NULL, style=NULL, fit_button_style=NULL, fit_button_content=NULL) {
    
    props <- list(id=id, selected=selected, dot_source=dot_source, style=style, fit_button_style=fit_button_style, fit_button_content=fit_button_content)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashInteractiveGraphviz',
        namespace = 'dash_interactive_graphviz',
        propNames = c('id', 'selected', 'dot_source', 'style', 'fit_button_style', 'fit_button_content'),
        package = 'dashInteractiveGraphviz'
        )

    structure(component, class = c('dash_component', 'list'))
}
