// yes, React is needed
import React from 'react';

// to render a react component into the DOM this special import is needed here
import ReactDOM from 'react-dom';

// used for the router component
import { BrowserRouter } from 'react-router-dom'

// react-router can have only have one child (at this moment). thus a 'wrapping component' called App is needed here
import App from './js/App';

// general CSS rules are loaded here
import css from './css/generic.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
