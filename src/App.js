import React, { Component } from 'react';
import { Message } from './Message';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Message name="Mehta" />
        );
    }
}
