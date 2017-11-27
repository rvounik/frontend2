// the root component combines reducers, sets up the store and ties routing components together

// unclear if and where this polyfill is required, but this seems to be the most common approach
import 'babel-polyfill';

import { h, render } from 'preact';
import Router from 'preact-router';
/** @jsx h */

// react-redux: make the store available to all container components in the application without passing it explicitly
import { Provider } from 'react-redux'

// this defines the redux store
import { createStore, combineReducers } from 'redux'

// import all reducers
import exampleReducer from './pages/Example/reducers/example';

// combine into one
const rootReducer = combineReducers({
    exampleReducer
});

// configure redux store with the combined reducers
let store = createStore(rootReducer);

// import common css so it becomes available in all page components. also easier to have client specific css this way!
import style from './../style/common.scss';

// load the page components to populate the router
/* todo: implement preact-async-route by not importing the component and defining the routing entry as:
 import AsyncRoute from 'preact-async-route';
 function getTasks(url, cb, props){ return System.import('./Tasks/Tasks').then(module => module.default) }
 <AsyncRoute path="/tasks" getComponent={ getTasks } /> */
import Header from './components/Header';
import Example from './pages/Example';

// todo: provider expects a single element, find a fix for this
render(
    <Provider store={ store }>
        <section>
            <Header key="header" />
            <main>
                <Router>
                    <Example exact path='/example' />
                    <Example exact path='/example' /><Example exact path='/example' /><Example exact path='/example' /><Example exact path='/example' />

                </Router>
            </main>
        </section>
    </Provider>,
    document.getElementById('application')
);

if (process.env.NODE_ENV === "production") {
    console.log('prod')
} else {
    console.log('dev');
}
