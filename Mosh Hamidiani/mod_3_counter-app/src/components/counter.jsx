import React, { Component } from 'react';

class Counter extends Component {
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
			<div className='row'>
				<div className='col-1'>
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className='col'>
					{' '}
					<button
						// onClick={this.handleIncrement}  Instead of this, In order to pass an arguement, Do below:
						onClick={() => {
							this.props.onIncrement(this.props.countersItem);
						}}
						className='btn btn-secondary btn-sm m-2'
					>
						+
					</button>
					<button
						disabled={!this.props.countersItem.value}
						onClick={() => {
							this.props.onDecrement(this.props.countersItem);
						}}
						className='btn btn-secondary btn-sm m-2'
					>
						-
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
			</div>
		);
	}
}

export default Counter;
