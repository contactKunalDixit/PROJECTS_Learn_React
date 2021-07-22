import React, { Component } from 'react';

class Like extends Component {
	likeCheckFunc = () => {
		let classes = 'fa fa-heart';
		if (!this.props.liked) {
			classes += '-o';
		} else {
			classes = 'fa fa-heart';
		}
		return classes;
	};

	render() {
		return (
			<i
				onClick={this.props.onClick}
				style={{ cursor: 'pointer' }}
				className={this.likeCheckFunc()}
				aria-hidden='true'
			></i>
		);
	}
}

export default Like;
