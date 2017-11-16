// this is the container component, it describes how data is passed on to the presentational components, but has no
// presentation itself (apart from some wrappers). it uses 'connect' to implement redux. it can also dispatch actions.
// in frontend this was called App.js and lived inside containers folder. however it had some markup, too and would
// only have been confusing to implement it in the same way here. (for starters, there is already a main App.js!)

// this is the container component (even though it has some markup and styling, and is not called containers/App.js)
import { h, render, Component } from 'preact';
/** @jsx h */

import { connect } from 'react-redux'
//import Tasks from './../components/Tasks'
import Task from './Task/components/Task';
import style from './../style/tasks'; // including css in a container component.. well, okay. not pretty but where else?

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.fetchSomething = this.fetchSomething.bind(this);
    }

    fetchSomething() {
        let nummer = Math.random() * 100;

        this.setState({active: nummer}); // wtf is this not a function?!

        return nummer;
    }

    componentDidMount() {
        this.setState({active: false});
    }

    render() {
        let someValue = this.props.active;

        return (
            <section className={ style.tasks }>
                <section>
                    <Task active={ someValue } fetchSomething={ this.fetchSomething } />
                </section>
            </section>
        )
    }
}

// maps the state to ehm.. well, props.
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

export default connect(mapStateToProps)(Tasks);
