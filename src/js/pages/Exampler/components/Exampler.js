// the presentational component is concerned with the actual layout. has its own css, and its own component methods

import { h, Component } from 'preact';
/** @jsx h */

import ExamplerItem from './ExamplerItem/components/ExamplerItem.js';
import showCurrentTime from '../../../utils/showCurrentTime.js';
import style from '../style/exampler.scss';

export default class Exampler extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, addRandomItem } = this.props;

        // you can wrap this in a const or a condition if required
        const examplerItem = <ExamplerItem
            items={ items }
            addRandomItem={ addRandomItem }
        />;

        let someDate = showCurrentTime();

        return (
            <section className={ style.example }>
                <span>{ someDate }</span>
                this is component 2 which is supposed to be lazy-loaded
                <section>
                    { examplerItem }
                </section>
            </section>
        )
    }
}
