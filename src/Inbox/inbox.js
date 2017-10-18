import { h, Component } from 'preact';
import Header from './../Header/header';

/** @jsx h */

export default class Inbox extends Component {
    constructor() {
        super();
    }

    render() {
        // todo: when preact allows wrapper-less returns (like react 16+ does), remove the <section> wrapper tags
        return (
            <section>
                <Header />
                <section>
                    <p>
                        Inbox content (which remains the starting page/app)
                    </p>
                </section>
            </section>
        )
    }
}
