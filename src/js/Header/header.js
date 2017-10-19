import React from 'react';
import Navigation from './js/Navigation/navigation';
import css from './css/header.css';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        // assume this list of nodes is provided by the authentication service
        let items = [
            { label: 'inbox', link: '/'} ,
            { label: 'organisations', link: '/organisations'} ,
            { label: 'tasks', link:'/tasks' }
        ];

        return (
            <header>
                <figure className="logo">logo</figure>
                <Navigation items={ items } />
            </header>
        )
    }
}
