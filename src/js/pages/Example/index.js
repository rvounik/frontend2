// the container component defines actions, initial data, mapStateToProps, dispatchers

import { h, render, Component } from 'preact';
/** @jsx h */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as exampleActions from './actions/example'

import Example from './components/Example'

class Index extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;

        // binds dispatch with action creators so dispatch or store doesnt need to be passed down to child components
        this.actions = bindActionCreators(
            Object.assign({}, exampleActions),
            dispatch
        );
    }

    // this is where you'd normally put logic that deals with data
    addRandomItem() {
        this.actions.addRandomItem(parseInt(100 * Math.random()));
    }

    // some example endpoint test (this uses a Promise to be asynchronous)
    apiEndpointRequest(url = 'https://httpbin.org/uuid') {
        fetch(url).then(response => {
            if (response.ok) {
                // synchronous, will not work! (this is why you'd something like thunk, actually)
                // console.log('retrieved uuid: '+response.json().uuid);

                response.json().then((response) => {
                    // asynchronous. using a promise. that will work
                    // document.querySelector('#uuid').value = response.uuid;
                    // console.log('retrieved uuid: '+response.uuid);

                    // append element with the uuid as its name
                    let entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(response.uuid));
                    document.getElementById('project-list').appendChild(entry);

                }).catch(error => {
                    return Promise.reject(console.log('JSON error: ' + error.message));
                });

                return response;
            }

            if (response.status === 404) {
                return Promise.reject(console.log('Endpoint error: ' + url));
            }

            return Promise.reject(console.log('HTTP error: ' + response.status));
        }).catch(error => {
            return Promise.reject(console.log('URL error: '+error.message));
        });
    }

    render() {
        return (<Example
                active={ this.props.active }
                items={ this.props.items }
                addRandomItem={ this.addRandomItem.bind(this) }
            />)
    }
}

const mapStateToProps = (state) => {
    return {
        active: state.exampleReducer.active,
        items: state.exampleReducer.items
    }
};

export default connect(mapStateToProps)(Index);
