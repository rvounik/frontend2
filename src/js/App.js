// the root component combines reducers, sets up the store and ties routing components together

// unclear if and where this polyfill is required, but this seems to be the most common approach
import 'babel-polyfill';

import { h, render } from 'preact';
import Router from 'preact-router';
/** @jsx h */

// react-redux: make the store available to all container components in the application without passing it explicitly
import { Provider } from 'react-redux'

// this defines the store we use (in old frontend: configureStore)
import { createStore, combineReducers } from 'redux'

// import all reducers
import someReducer from './pages/Tasks/reducers/someReducer';
//const test = Tasks.someReducer; // would something like this work? it saves having to import each reducer separately

// combine into one
const rootReducer = combineReducers({
    someReducer
});

// configure redux store with the combined reducers
let store = createStore(rootReducer);

// import common css so it becomes available in all page components. also easier to have client specific css this way!
import common from './../style/common.scss';

// load the page components to populate the router
/* todo: implement preact-async-route by not importing the component and defining the routing entry as:
 import AsyncRoute from 'preact-async-route';
 function getTasks(url, cb, props){ return System.import('./Tasks/Tasks').then(module => module.default) }
 <AsyncRoute path="/tasks" getComponent={ getTasks } /> */
import Header from './components/Header/Header';
import Inbox from './pages/Inbox/Inbox';
import Organisations from './pages/Organisations/Organisations';
import Tasks from './pages/Tasks';

render(
    <Provider store={ store }>
    <section>
        <Header key="header" />
        <main>
            <Router>
                <Inbox exact path='/' />
                <Organisations exact path='/organisations' />
                <Tasks exact path='/tasks' />
            </Router>
        </main>
    </section>
    </Provider>,
    document.getElementById('application')
);
