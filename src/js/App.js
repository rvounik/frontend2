// the root component combines reducers, sets up the store and ties routing components together

// unclear if and where this polyfill is required, but this seems to be the most common approach
import 'babel-polyfill';

import { h, render } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
/** @jsx h */

// react-redux: make the store available to all container components in the application without passing it explicitly
import { Provider } from 'react-redux'

// this defines the redux store
import { createStore, combineReducers } from 'redux'

// import all reducers
import exampleReducer from './pages/Example/reducers/example';
import examplerReducer from './pages/Exampler/reducers/exampler';

// combine into one
const rootReducer = combineReducers({
    exampleReducer,
    examplerReducer
});

// configure redux store with the combined reducers
let store = createStore(rootReducer);

// import common css so it becomes available in all page components. also easier to have client specific css this way!
import style from './../style/common.scss';

// these will create separate .js files (0.js, 1.js etc) however I do not see app.js shrinking because of this :(
function getExample(){
    return System.import('./pages/Example').then(module => module.default)
}

function getExampler(){
    return System.import('./pages/Exampler').then(module => module.default)
}

import Header from './components/Header';
// import Example from './pages/Example';
// import Exampler from './pages/Exampler';

render(
    <Provider store={ store }>
        <section>
            <Header key="header" />
            <main>
                <Router>
                    <AsyncRoute path="/example" getComponent={ getExample } />
                    <AsyncRoute path="/exampler" getComponent={ getExampler } />
                </Router>
            </main>
        </section>
    </Provider>,
    document.getElementById('application')
);

// this will show a console message depending on the environment the assets were built for
if (process.env.NODE_ENV === "production") {
    console.log('running in production mode');
} else {
    console.log('running in dev mode');
}
