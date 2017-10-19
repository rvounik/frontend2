import React from 'react';
import Organisation from './js/Organisation/Organisation';
import css from './css/organisations.css';

export default class Organisations extends React.Component {
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
