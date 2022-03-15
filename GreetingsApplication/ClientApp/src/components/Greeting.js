import React, { Component } from 'react';

export class Greeting extends Component {
    static displayName = Greeting.name;

    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="name">Name</label>
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </form>

                <h3>Hello {this.state.name}, Good morning!</h3>
            </React.Fragment>
        );
    }
}
