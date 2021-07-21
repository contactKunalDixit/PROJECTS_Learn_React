import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const { onReset, counters, onIncrement, onDelete } = this.props; // Destructuring being used for clean up purpose

		if (counters.length === 0) {
			return <h4>There is noting to show in the list..Pls refresh</h4>;
		}
		return (
			<div>
				<button onClick={onReset} className='btn btn-sm btn-primary m-2'>
					Reset
				</button>
				{counters.map((countersItem) => (
					<Counter
						key={countersItem.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						countersItem={countersItem}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
