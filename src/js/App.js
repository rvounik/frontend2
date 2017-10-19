import React from 'react';
import Header from './Header/header';
import Main from './Main';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return [
            <Header key="header" />,
            <Main key="main" />
        ];
    }
}
