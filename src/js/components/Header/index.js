import { h, Component } from 'preact';
/** @jsx h */

import Header from './components/Header'

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Header />)
    }
}

export default Index;
