import React, { Component } from 'react';

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	console.log(this);
	// 	this.handleIncrement = this.handleIncrement.bind(this); //or else, in order to avoid binding of each event handler like this, USE ARROW function
	// }

	state = {
		value: this.props.value,
	};

	formatCount() {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value;
	}
	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	handleIncrement = (placeHolder) => {
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		console.log('props', this.props);
		return (
			<div>
				<h4>Counter# {this.props.id}</h4>
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
			</div>
		);
	}
}

export default Counter;
