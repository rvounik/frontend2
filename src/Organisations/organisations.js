import React from 'react';
import ReactDOM from 'react';
import Organisation from './js/Organisation/Organisation';
import css from './css/organisations.css';

/* and so the question remains. will each SPA render to its own DOM hook (ie: body) or does only
   index.js do this and are the SPA's somehow loaded in when required? the latter seems preferred.
   in which case I wonder whether they should start with an 'index', too or straight to the parent component? */

ReactDOM.render(
    <Organisation label={ 'label' } />,
    document.querySelector('body'),
    document.querySelector('body').lastChild
);
