import React from 'react';
import { Link } from 'react-router-dom'
import css from './css/navigation-item.css';

export default class navigationItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { label, link } = this.props;

        return (
            <li className="navigation-item"><Link to={ link }>{ label }</Link></li>
        )
    }
}
