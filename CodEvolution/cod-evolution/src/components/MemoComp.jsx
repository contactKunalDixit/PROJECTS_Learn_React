import React from 'react';

function MemoComp({ name, nameChangeHandler }) {
	console.log('rendering Memo Component');

	return (
		<div>
			{name}
			<div>
				<button
					onClick={(e) => {
						nameChangeHandler(e);
					}}
				>
					ClickME
				</button>
			</div>
		</div>
	);
}

// export default React.memo(MemoComp);
export default MemoComp;
