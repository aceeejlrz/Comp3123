'use client'
import React, { Component } from 'react';

export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Counter Class Component</h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
            </div>
        );
    }
}
