import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 6 },
			{ id: 5, value: 0 },
		],
	};
	render() {
		return (
			<div>
				{this.state.counters.map((counterItem) => (
					<Counter
						key={counterItem.id}
						value={counterItem.value}
						selected={true}
						id={counterItem.id}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
