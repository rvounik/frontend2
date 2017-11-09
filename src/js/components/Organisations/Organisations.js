import { h, Component } from 'preact';
/** @jsx h */

import Organisation from './js/Organisation/Organisation';
import css from './css/organisations';

export default class Organisations extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="clear organisations">
                <section>
                    <Organisation label={ 'label' } />
                </section>
            </section>
        )
    }
}