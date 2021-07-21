import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		if (this.props.counters.length === 0) {
			return <h4>There is noting to show in the list..Pls refresh</h4>;
		}
		return (
			<div>
				<button
					onClick={this.props.onReset}
					className='btn btn-sm btn-primary m-2'
				>
					Reset
				</button>
				{this.props.counters.map((countersItem) => (
					<Counter
						key={countersItem.id}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						countersItem={countersItem}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
