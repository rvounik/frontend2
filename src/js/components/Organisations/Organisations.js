import { h, Component } from 'preact';
import classNames from 'classnames';
/** @jsx h */

import Organisation from './js/Organisation/Organisation';
import css from './css/organisations';

export default class Organisations extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className={ classNames('clear', css.organisations) } >
                <section>
                    <Organisation label={ 'label' } />
                </section>
            </section>
        )
    }
}
