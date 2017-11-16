// this is the container component, it describes how data is passed on to the presentational components, but has no
// presentation itself. it uses connect to implement redux. it can also dispatch actions.
// note that this could have been included in index.js, but that would have been messy and would make it impossible
// to split this component up. in old frontend we never did split up our container components but we should have.

import { h } from 'preact';
/** @jsx h */

import { connect } from 'react-redux'
import Tasks from './../components/Tasks'

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

const App = connect(
	mapStateToProps
)(Tasks);

export default App
