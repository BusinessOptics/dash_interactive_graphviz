# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashInteractiveGraphviz <- function(id=NULL, dot_source=NULL, engine=NULL, fit_button_content=NULL, fit_button_style=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, selected=NULL, selected_edge=NULL, selected_node=NULL, style=NULL) {
    
    props <- list(id=id, dot_source=dot_source, engine=engine, fit_button_content=fit_button_content, fit_button_style=fit_button_style, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, selected=selected, selected_edge=selected_edge, selected_node=selected_node, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashInteractiveGraphviz',
        namespace = 'dash_interactive_graphviz',
        propNames = c('id', 'dot_source', 'engine', 'fit_button_content', 'fit_button_style', 'persisted_props', 'persistence', 'persistence_type', 'selected', 'selected_edge', 'selected_node', 'style'),
        package = 'dashInteractiveGraphviz'
        )

    structure(component, class = c('dash_component', 'list'))
}
