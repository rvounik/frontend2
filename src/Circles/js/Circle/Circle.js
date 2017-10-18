import { h, Component } from 'preact';

/** @jsx h */

export default class Circle extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <p>
                I serve no other purpose than to be different from the other component.
                <br />
                <br />
                Quite sad, really.
            </p>
        )
    }
}
