/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashInteractiveGraphviz} from '../lib';

let dot_source = 'digraph { A->B->D; A->C->D  }';

class App extends Component {
    constructor() {
        super();
        this.state = {
            dot_source,
            onNodeClick: console.log,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
        console.log(newProps);
    }

    render() {
        return (
            <div>
                <DashInteractiveGraphviz
                    setProps={this.setProps}
                    {...this.state}
                />
                <textarea
                    defaultValue="digraph { A->B->C->D }"
                    onChange={e => this.setProps({dot_source: e.target.value})}
                    style={{position: 'absolute'}}
                />
            </div>
        );
    }
}

export default App;
