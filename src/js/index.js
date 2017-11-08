import { h, render } from 'preact';
/** @jsx h */

import App from './App';

// general CSS rules are loaded here
import css from './../css/generic';

render(
    <App />,
    document.getElementById('app')
);
