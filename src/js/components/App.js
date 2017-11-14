import { h, Component } from 'preact';
/** @jsx h */

import Header from './Header/js/Header';
import Main from './Main';

/* consider this the 'Master' application */

export default class App extends Component {
    constructor() {
        super();
    }

    // keep in mind: preact requires a wrapping element, react does not
    render() {
        return (
            <section>
                <Header key="header" />
                <Main key="main" />
            </section>
        );
    }
}
