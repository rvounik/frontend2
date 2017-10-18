import { Router } from 'preact-router';
import { h, Component, render } from 'preact';
/** @jsx h */

const Inbox = () => (
    <div>
        inbox content goes here
    </div>
);

const Error = () => (
    <div>
        Page not found
    </div>
);

const App = () => (
    <div className="app">
        <Router>
            <Inbox path="/inbox" />
            <Error path="/error" default />
        </Router>
    </div>
);

render(<App />, document.body);
