# AUTO GENERATED FILE - DO NOT EDIT

''DashInteractiveGraphviz <- function(id=NULL, selected=NULL, selected_node=NULL, selected_edge=NULL, dot_source=NULL, engine=NULL, style=NULL, fit_button_style=NULL, fit_button_content=NULL, persistence=NULL, persisted_props=NULL, persistence_type=NULL) {
    
    props <- list(id=id, selected=selected, selected_node=selected_node, selected_edge=selected_edge, dot_source=dot_source, engine=engine, style=style, fit_button_style=fit_button_style, fit_button_content=fit_button_content, persistence=persistence, persisted_props=persisted_props, persistence_type=persistence_type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashInteractiveGraphviz',
        namespace = 'dash_interactive_graphviz',
        propNames = c('id', 'selected', 'selected_node', 'selected_edge', 'dot_source', 'engine', 'style', 'fit_button_style', 'fit_button_content', 'persistence', 'persisted_props', 'persistence_type'),
        package = 'dashInteractiveGraphviz'
        )

    structure(component, class = c('dash_component', 'list'))
}
