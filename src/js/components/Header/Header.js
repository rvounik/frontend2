import { h, Component } from 'preact';
/** @jsx h */

import Navigation from './js/Navigation/Navigation';
import css from './css/header.scss';

export default class Header extends Component {
    constructor() {
        super();
    }

    // just a simple method to test the mocha integration
    addNumbers(a, b) {
        return a + b;
    }

    render() {
        // assume this list of nodes is provided by the authentication service
        let items = [
            { label: 'inbox', link: '/'} ,
            { label: 'organisations', link: '/organisations'} ,
            { label: 'tasks', link:'/tasks' }
        ];

        return (
            <header className={ css.header }>
                <figure className="logo"></figure>
                <Navigation items={ items } />
            </header>
        )
    }
}
