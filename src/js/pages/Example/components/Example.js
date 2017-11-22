// the presentational component is concerned with the actual layout. has its own css, and its own component methods

import { h, render, Component } from 'preact';
/** @jsx h */

import ExampleItem from './ExampleItem/components/ExampleItem.js';
import formatDate from './../../../utils/formatDate.js';
import style from './../style/example.scss';

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // you can wrap this in a const or a condition if required
        const exampleItem = <ExampleItem
            style={ style }
            item={ this.props.item }
            addRandomItem={ this.props.addRandomItem }
        />;

        return (
            <section className={ style.example }>
                <section>
                    { exampleItem }
                </section>
            </section>
        )
    }
}

export default Example;
