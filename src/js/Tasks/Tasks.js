import { h, Component } from 'preact';
/** @jsx h */

import Task from './js/Task/Task';
import css from './css/tasks';

export default class Tasks extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="clear tasks">
                <section>
                    <Task />
                </section>
            </section>
        )
    }
}
