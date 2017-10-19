import React from 'react';
import Task from './js/Task/Task';
import css from './css/tasks.css';

export default class Tasks extends React.Component {
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
