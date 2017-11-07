//import React from 'react';
import { h, Component } from 'preact';
/** @jsx h */
import css from './css/inbox.css';

export default class Inbox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="clear inbox">
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
