import Router from 'preact-router';
import { h, Component } from 'preact';
/** @jsx h */

import Inbox from './Inbox/inbox'
import Organisations from './Organisations/organisations'
import Tasks from './Tasks/tasks'

export default class Main extends Component {
    constructor() {
        super();
    }

    // todo: figure out how to lazy-load the components
    // todo: also ensure if you have no rights for certain components, they are not loaded

    render() {
        return (
            <main>
                <Router>
                    <Inbox exact path='/' />
                    <Organisations exact path='/organisations' />
                    <Tasks path='/tasks' />
                </Router>
            </main>
        )
    }
}
