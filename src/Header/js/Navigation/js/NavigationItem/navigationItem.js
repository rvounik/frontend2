import React from 'react';
import css from './css/navigation-item.css';

export default class navigationItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { label, link } = this.props;

        return (
            <li className="navigation-item"><a href={ link }>{ label }</a></li>
        )
    }
}
