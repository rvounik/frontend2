import { h, Component } from 'preact';
import classNames from 'classnames';
/** @jsx h */

import Organisation from './components/Organisation/components/Organisation';
import css from './style/organisations';

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
