import React, { Component } from 'react';

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	console.log(this);
	// 	this.handleIncrement = this.handleIncrement.bind(this); //or else, in order to avoid binding of each event handler like this, USE ARROW function
	// }

	formatCount() {
		const { value } = this.props.countersItem;
		return value === 0 ? 'Zero' : value;
	}
	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.countersItem.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					// onClick={this.handleIncrement}  Instead of this, Inm order to pass an arguement, Do below:
					onClick={() => {
						this.props.onIncrement(this.props.countersItem);
					}}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>

				<button
					onClick={() => {
						console.log('this file is');
						return this.props.onDelete(this.props.countersItem.id);
					}}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
