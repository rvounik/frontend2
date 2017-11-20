// the presentational component is concerned with the actual layout. has its own css, and its own component methods

import { h, render, Component } from 'preact';
/** @jsx h */

import Task from './Task/components/Task';
import style from './../style/tasks';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({active: false});
    }

    render() {
        let someValue = this.props.active;

        return (
            <section className={ style.tasks }>
                <section>
                    <Task
                        active={ someValue }
                        fetchSomething={ this.props.fetchSomething }
                    />
                </section>
            </section>
        )
    }
}

export default Tasks;
