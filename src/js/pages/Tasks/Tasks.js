import { h, Component } from 'preact';
/** @jsx h */

import Task from './components/Task/components/Task';
import style from './style/tasks';

export default class Tasks extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className={ style.tasks }>
                <section>
                    <Task />
                </section>
            </section>
        )
    }
}
