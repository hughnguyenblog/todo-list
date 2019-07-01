import React, { Component } from 'react';

class TaskList extends Component {
	handleDeletekey = (data) => {
		console.log(data);
		this.props.passDelete(data);
	};
	passKeyStyle = (e) => {
		console.log(e);
		this.props.passStyle(e);
	};
	passUndoneKey = (a) => {
		console.log(a);
		this.props.passUnDone(a);
	};
	render() {
		const done = { background: 'green' };
		const undone = { background: 'red' };
		return (
			<div>
				<h1>Task</h1>
				<p>Click the task mean done:</p>
				{this.props.passDataPtoC.map((e) => {
					return (
						<li style={undone} key={e.key} onClick={() => this.passKeyStyle(e.key)}>
							{e.text}
						</li>
					);
				})}
				<hr />
				<h1>Done Task</h1>
				<p>Click Done Task mean undone:</p>
				{this.props.selectTask.map((e) => {
					return (
						<div>
							<li key={e.key} style={done} onClick={() => this.passUndoneKey(e.key)}>
								{e.text}
								<button onClick={() => this.handleDeletekey(e.key)}>delete</button>
							</li>
						</div>
					);
				})}
			</div>
		);
	}
}

export default TaskList;
