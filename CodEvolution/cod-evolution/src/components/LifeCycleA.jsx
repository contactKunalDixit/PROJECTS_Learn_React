import React, { Component } from 'react';
import LifeCycleBchild from './LifeCycleBchild';
export class LifeCycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Kunal',
		};
		console.log('LifeCycle A Constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifeCycle A getDerivedStateFromProps');
		return null;
	}

	shouldComponentUpdate() {
		console.log('LifeCycle A shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifeCycle A getSnapShotBeforeUpdate');
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log('LifeCycle A componentDidUpdate');
	}

	changeState = () => {
		this.setState({ name: 'Chicku Chikcu' });
	};

	render() {
		console.log('LifeCycle A render');
		return (
			<div>
				<div>LifeCycle A</div>
				<button onClick={this.changeState}>Change State</button>
				<LifeCycleBchild></LifeCycleBchild>
			</div>
		);
	}
}

export default LifeCycleA;
