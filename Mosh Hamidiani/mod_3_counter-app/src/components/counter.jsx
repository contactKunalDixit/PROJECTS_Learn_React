import React, { Component } from 'react';

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	console.log(this);
	// 	this.handleIncrement = this.handleIncrement.bind(this); //or else, in order to avoid binding of each event handler like this, USE ARROW function
	// }

	state = {
		count: 0,
		tags: [
			{ id: 1, label: 'tag1' },
			{ id: 2, label: 'tag2' },
			{ id: 3, label: 'tag3' },
		],
	};

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	renderTags() {
		if (this.state.tags.length === 0)
			return <p>There is nothing to display!</p>;
		return (
			<ul>
				{this.state.tags.map((item) => (
					<li key={item.id}>{item.label}</li>
				))}
			</ul>
		);
	}
	handleIncrement = (placeHolder) => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					// onClick={this.handleIncrement}
					onClick={() => {
						this.handleIncrement();
					}}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>
				<div>
					{this.state.tags.length === 0 && 'Please input something'}
					{this.renderTags()};
				</div>
			</React.Fragment>
		);
	}
}

export default Counter;
