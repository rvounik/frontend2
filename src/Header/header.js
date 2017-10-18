import { h, Component } from 'preact';
import Navigation from './js/Navigation/Navigation';

/** @jsx h */

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                logo
                <Navigation />
            </header>
        )
    }
}
