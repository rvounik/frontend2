// still unclear if and where this polyfill is required, but this seems to be the most common approach
import 'babel-polyfill';

import { h, render } from 'preact';
import Router from 'preact-router';
/** @jsx h */

// general CSS rules are loaded here (keep this above the JS imports since this CSS needs to be on top)
import style from './../style/common.scss';

import Header from './components/Header/Header';

// load the pages to populate the router

/* todo: implement preact-async-route by not importing the component and defining the routing entry as:
// import AsyncRoute from 'preact-async-route';
// function getTasks(url, cb, props){ return System.import('./Tasks/Tasks').then(module => module.default) }
// <AsyncRoute path="/tasks" getComponent={ getTasks } /> */

import Inbox from './pages/Inbox/Inbox';
import Organisations from './pages/Organisations/Organisations';
import Tasks from './pages/Tasks';

render(
    <section>
        <Header key="header" />
        <main>
            <Router>
                <Inbox exact path='/' />
                <Organisations exact path='/organisations' />
                <Tasks exact path='/tasks' />
            </Router>
        </main>
    </section>,
    document.getElementById('application')
);
