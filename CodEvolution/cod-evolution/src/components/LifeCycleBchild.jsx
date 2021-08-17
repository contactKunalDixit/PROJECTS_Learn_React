import React, { Component } from 'react';

export class LifeCycleBchild extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Amaira',
		};
		console.log('LifeCycle b Constructor');
	}
	static getDerivedStateFromProps(props, state) {
		console.log('LifeCycle B getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('LifeCycle B - Child  ComponentDidMount');
	}

	shouldComponentUpdate() {
		console.log('LifeCycle B shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifeCycle B getSnapShotBeforeUpdate');
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log('LifeCycle B componentDidUpdate');
	}

	render() {
		console.log('LifeCycle A render');
		return <div>LifeCycle B - Child</div>;
	}
}

export default LifeCycleBchild;
