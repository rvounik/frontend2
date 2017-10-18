import React from 'react';
import Header from './../Header/header';

export default class Inbox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <Header />
                <section>
                    <p>
                        Inbox content (the starting page/app in neon)
                    </p>
                    <p>would be nice to have this as a PWA at some point that uses preact instead of react</p>
                </section>
            </section>
        )
    }
}
