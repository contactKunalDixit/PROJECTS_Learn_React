import React, { useState } from 'react';
import MemoComp from './MemoComp';
function ParentComp() {
	const [name, setName] = useState('Kunal');

	const nameChangeHandler = (e) => {
		console.log('This is being rendered bcoz of React.memo');
		setName('Amaira');
	};
	return (
		<div>
			<MemoComp name={name} nameChangeHandler={nameChangeHandler}></MemoComp>
		</div>
	);
}

export default ParentComp;
