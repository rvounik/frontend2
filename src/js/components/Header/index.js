import { h, Component } from 'preact';
/** @jsx h */

// some comment
import Header from './components/Header/Header'

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Header />)
    }
}

export default Index;
