import React, { Component } from 'react';
import TaskList from './TaskList';

export class TodoList extends Component {
	state = {
		task: [],
		selectTask: []
	};

	addTask = (e) => {
		const newTask = {
			text: this.getElement.value,
			key: Date.now()
		};
		this.setState((prevState) => {
			return {
				task: prevState.task.concat(newTask)
			};
		});
		e.preventDefault();

		this.getElement.value = '';
	};

	handleDone = (e) => {
		const filteredTask = this.state.task.filter((item) => {
			return item.key !== e;
		});
		const selectedTask = this.state.task.find((item) => {
			return item.key === e;
		});
		console.log(selectedTask);

		this.setState({
			task: filteredTask,
			selectTask: this.state.selectTask.concat(selectedTask)
		});
		console.log(this.state.selectTask);
	};
	handleUndone = (e) => {
		const filterdTask = this.state.selectTask.filter((data) => {
			return data.key !== e;
		});
		const selectItem = this.state.selectTask.find((data) => {
			return data.key === e;
		});
		this.setState({
			selectTask: filterdTask,
			task: this.state.task.concat(selectItem)
		});
	};

	handleDelete = (data) => {
		const filteredTask = this.state.selectTask.filter((item) => {
			return item.key !== data;
		});
		this.setState({
			selectTask: filteredTask
		});
	};

	render() {
		return (
			<div>
				<h2>Learn how to pass data by props-drilling </h2>
				<form>
					<input type="text" ref={(a) => (this.getElement = a)} placeholder="Add value" />
					<button onClick={this.addTask}>Add</button>
				</form>
				<hr />
				<TaskList
					passDataPtoC={this.state.task}
					passDelete={this.handleDelete}
					passStyle={this.handleDone}
					passUnDone={this.handleUndone}
					selectTask={this.state.selectTask}
				/>
			</div>
		);
	}
}

export default TodoList;
