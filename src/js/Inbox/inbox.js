import React from 'react';

export default class Inbox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="clear">
                <section>
                    <p>
                        Inbox content: the starting page (app?) in neon
                        <br />
                        <br />
                        (would be nice to have this as a PWA at some point that uses preact instead of react)
                    </p>
                </section>
            </section>
        )
    }
}
