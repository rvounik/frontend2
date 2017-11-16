// this is the root presentational component, it contains styles and actual layout of the page, since, well.. its root.
import { h, Component } from 'preact';
/** @jsx h */

import Task from './Task/components/Task';
import style from './../style/tasks'; // this doesnt seem fit anymore :(

export default class Tasks extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className={ style.tasks }>
				<section>
					<Task />
				</section>
			</section>
		)
	}
}
