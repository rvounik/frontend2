import React from 'react';

export default class Organisation extends React.Component {
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
