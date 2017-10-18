import { h, render } from 'preact';
import Square from './js/Square/Square';

// import css
import css from './css/squares.css';

/** @jsx h */

// you can consider this to be the 'app' or master component that loads up the entire SPA for this route

render(
    <Square />,
    document.querySelector('body'),
    document.querySelector('body').lastChild
);
