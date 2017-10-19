import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Inbox from './Inbox/inbox'
import Organisations from './Organisations/organisations'
import Tasks from './Tasks/tasks'

export default class Main extends React.Component {
    constructor() {
        super();
    }

    // todo: figure out how to lazy-load the components
    // todo: also ensure if you have no rights for certain components, they are not loaded

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ Inbox } />
                    <Route exact path='/organisations' component={ Organisations } />
                    <Route path='/tasks' component={ Tasks } />
                </Switch>
            </main>
        )
    }
}
