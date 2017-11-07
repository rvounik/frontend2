// import React from 'react';
// import Header from './Header/header';
// import Main from './Main';
//
// export default class App extends React.Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         return [
//             <Header key="header" />,
//             <Main key="main" />
//         ];
//     }
// }
//

import { h, Component } from 'preact';
/** @jsx h */

import Header from './Header/header';
import Main from './Main';

export default class App extends Component {
    constructor() {
        super();
    }

    // keep in mind: preact requires a wrapping element, react does not (when using an array, that is)
    render() {
        return (
            <section>
                <Header key="header" />
                <Main key="main" />
            </section>
        );
    }
}


