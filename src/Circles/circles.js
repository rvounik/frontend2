import { h, render } from 'preact';
import Circle from './Circle/Circle';

// import css
import css from './css/index.css';

/** @jsx h */

// you can consider this to be the 'app' or master component that loads up the entire SPA for this route

render(
    <Circle />,
    document.querySelector('body'),
    document.querySelector('body').firstChild
);
