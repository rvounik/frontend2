import { h, Component } from 'preact';
import Router from 'preact-router';

/** @jsx h */

/* implement preact-async-route by not importing the component and defining the routing entry as:
import AsyncRoute from 'preact-async-route';
function getTasks(url, cb, props){ return System.import('./Tasks/Tasks').then(module => module.default) }
<AsyncRoute path="/tasks" getComponent={ getTasks } /> */

import Inbox from './Inbox/Inbox'
import Organisations from './Organisations/Organisations'
import Tasks from './Tasks/Tasks'

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
                <Router>
                    <Inbox exact path='/' />
                    <Organisations exact path='/organisations' />
                    <Tasks exact path="/tasks" />
                </Router>
            </main>
        )
    }
}
