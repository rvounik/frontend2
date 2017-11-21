// the container component defines actions, initial data, mapStateToProps, dispatchers

import { h, render, Component } from 'preact';
/** @jsx h */

import { connect } from 'react-redux'

import Example from './components/Example'

class Index extends Component {
    constructor(props) {
        super(props);
    }

    // this is where you'd normally put logic that deals with data (though in best case an action should handle this)

    // todo: convert to an action

    // some example endpoint test (this uses a Promise to be asynchronous)
    apiEndpointRequest(url) {
        fetch(url).then(response => {
            if (response.ok) {
                // synchronous, will not work! (this is why you'd something like thunk, actually)
                // console.log('retrieved uuid: '+response.json().uuid);

                response.json().then((response) => {
                    // asynchronous. using a promise. that will works
                    //document.querySelector('#uuid').value = response.uuid;
                    //console.log('retrieved uuid: '+response.uuid);

                    //append element with the uuid as its name
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
                apiEndpointRequest={ this.apiEndpointRequest }
            />)
    }
}

// defines initial data, then maps the state to props so it can be passed on to child components
const mapStateToProps = (state, ownProps) => {
    return {
        active: true
    }
};

// action dispatchers
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => {
// 			dispatch(setVisibilityFilter(ownProps.filter))
// 		}
// 	}
// }

export default connect(mapStateToProps)(Index);
