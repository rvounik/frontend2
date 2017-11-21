// the presentational component is concerned with the actual layout. has its own css, and its own component methods

import { h, Component } from 'preact';
/** @jsx h */

// import { PropTypes } from 'react';

class ExampleItem extends Component {
    constructor(props) {
        super(props);

        // define a local state (to keep track of something in the GUI, for example)
        this.localState = {
            active: false
        }
    }

    // lifecycle methods go here
    componentDidUpdate() {
    }

    render() {
        let { apiEndpointRequest, style } = this.props;
        // style was passed on as a prop to be able to use a custom selector defined in it. alternatively it could have
        // been imported again (file size won't increase) but it would be best to give this component its own css file

        // since setState was used to update this var, the component re-renders and thus the localState is toggled
        let activeText;
        if (this.localState.active) {
            activeText = 'active';
        } else {
            activeText = '';
        }

        return (
            // keep in mind, normally you'd extract this into a button and a list component, and perhaps even listItem
            <section>
                <p>
                    <button onClick={ () => apiEndpointRequest('https://httpbin.org/uuid') } type="button">Add item +</button>
                    <br/><br/>
                    That will perform a 'real' Fetch request to an API endpoint and then use a Promise to append the element below when it returns.
                </p>
                <br />
                <br />
                <span
                    onClick={ () => this.setState(this.localState.active = !this.localState.active === true) }
                    className={ style.someFilter }
                >
                    toggle 'someFilter'
                </span>{ activeText }
                <ul id="project-list">
                    <li>196dc5ee-9a0a-439d-8e0a-83405ac1938c</li>
                    <li>8bed29c9-85b6-4910-a25d-78d51573cced</li>
                </ul>
            </section>
        )
    }
}

// ExampleItem.propTypes = {
//     somethingthatwillerror: PropTypes.bool.isRequired
// };

export default ExampleItem;

