import { h, Component } from 'preact';


/** @jsx h */

export default class Circle extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <p>I am actually a Preact component</p>
        )
    }
}