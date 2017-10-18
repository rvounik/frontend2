import React from 'react';
import Navigation from './js/Navigation/Navigation';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        let items = [ {label: 'organisations', link: '/organisations'}, { label: 'tasks', link:'/tasks'} ];

        return (
            <header>
                logo
                <Navigation items={ items } />
            </header>
        )
    }
}
