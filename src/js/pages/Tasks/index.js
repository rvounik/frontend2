// the container component (frontend 1: containers/App.js) defines actions, initial data, mapStateToProps, dispatchers

import { h, render, Component } from 'preact';
/** @jsx h */

import { connect } from 'react-redux'

import Tasks from './components/Tasks'


class Index extends Component {
    constructor(props) {
        super(props);
    }

    // defines how data is stored and retrieved (though in best case an action should handle this)
    fetchSomething() {
        return Math.random() * 100;
    }

    render() {
        return (
            <Tasks
                active={ this.props.active }
                fetchSomething={ this.fetchSomething }
            />
        )
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
