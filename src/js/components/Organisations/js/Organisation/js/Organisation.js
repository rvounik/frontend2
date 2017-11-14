import { h, Component } from 'preact';
/** @jsx h */

export default class Organisation extends Component {
    constructor() {
        super();
    }

    render() {
        let label = this.props.label;

        return (
            <p>
                I am a single organisation called { label }
            </p>
        )
    }
}
