import { h, Component } from 'preact';
/** @jsx h */

import Navigation from './components/Navigation/js/Navigation';
import style from './style/header';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        // assume this list of nodes is provided by the authentication service
        let items = [
            { label: 'inbox', link: '/'},
            { label: 'organisations', link: '/organisations'},
            { label: 'tasks', link:'/tasks' }
        ];

        return (
            <header className={ style.header }>
                <figure className="logo"></figure>
                <Navigation items={ items } />
            </header>
        )
    }
}
