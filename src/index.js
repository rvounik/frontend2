import { h, render } from 'preact';
/** @jsx h */

import App from './js/App';

// general CSS rules are loaded here
import css from './css/generic.css';

render(
    <App />,
    document.getElementById('app')
);
