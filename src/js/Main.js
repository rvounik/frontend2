import Router from 'preact-router';
import { h, Component } from 'preact';
/** @jsx h */

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
                    <Tasks path='/tasks' />
                </Router>
            </main>
        )
    }
}
