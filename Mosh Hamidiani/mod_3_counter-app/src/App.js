import './App.css';
import Navbar from './components/navBar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 6 },
			{ id: 5, value: 0 },
		],
	};

	handleIncrement = (countersItem) => {
		console.log(countersItem);
		const newCounters = [...this.state.counters];
		//spreading: cloning the array using spread operators, because we cant make changes to the original state directly..

		const index = newCounters.indexOf(countersItem);
		// finding index value of the specific object from newCounters array;

		newCounters[index] = { ...countersItem };
		//...REFER TO #1 BELOW:

		newCounters[index].value++;
		// incrementing the value property of the object (by 1) positioned at that index value. This object is the same object which was cloned in the last step

		this.setState({ counters: newCounters });
		// Updating the state
	};

	handleDelete = (counterId) => {
		console.log('Event handler called', counterId);

		const newCounters = this.state.counters.filter((itemObj) => {
			return itemObj.id !== counterId;
		});

		this.setState({ counters: newCounters });
	};

	handleReset = () => {
		const resettedCounters = this.state.counters.map((i) => {
			i.value = 0;
			return i;
		});
		this.setState({ counters: resettedCounters });
	};
	render() {
		return (
			<React.Fragment>
				<Navbar
					totalCounters={this.state.counters.filter((i) => i.value > 0).length}
				></Navbar>
				<main className='container'>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
					></Counters>
				</main>
			</React.Fragment>
		);
	}
}

export default App;

/*

REFERENCE: 

#1.	Spread Operators: Since we are using  a spread operator on a nested object, hence it wouldve deep copied only the 1st top most data and shallow copied the nested objects. Thus, we need to use a spread operator again here so that we dont end up mutating the original object
*/
