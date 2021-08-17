import React, { Component } from 'react';

class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef(); //1 Step: creating a ref
	}

	componentDidMount() {
		this.inputRef.current.focus();
		console.log(this.inputRef);
	}

	clickHandler = () => {
		console.log(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef}></input>
				<button onClick={this.clickHandler}>Click Me</button>
			</div>
		);
	}
}

export default RefsDemo;
