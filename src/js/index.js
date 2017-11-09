import { h, render } from 'preact';
import AsyncRoute from 'preact-async-route';
/** @jsx h */

// general CSS rules are loaded here (keep this above the JS imports since this CSS needs to be on top)
import css from './../css/common';

import App from './components/App';

render(
    <App />,
    document.getElementById('application')
);
