import React, { Component } from 'react';

const ListGroup = (props) => {
	const { items, onItemSelect, textProperty, valueProperty, selectedItem } =
		props;
	return (
		<ul className='list-group'>
			{items.map((i) => {
				return (
					<li
						onClick={() => {
							onItemSelect(i);
						}}
						key={i[valueProperty]}
						className={
							i === selectedItem ? 'list-group-item active' : 'list-group-item'
						}
					>
						{i[textProperty]}
					</li>
				);
			})}
		</ul>
	);
};

ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id',
};

export default ListGroup;

/*

1	*	The 'valueProperty' and the 'textProperty' have been added so that we can have more flexibility. Not always would it happen that the items being resourced would have key names as '_id' and 'name'. They could be different, thus in here, we are using variables 'valueProperty' and 'textProperty' which could be assigned different values depending upon the source key names

In here, the variable 'valueProperty' has been assigned '_id' and 'textProperty' has been assigned "name"

Also, since these are variables in themselves, Hence we are NOT using . notation to access these properties BUT instead using square bracket notation

*/

/*
Another more effective way of defining these as default values is to define them as default Props as shown with the e.g. of ListGroup. 

To define an object 'defaultProps' consisting of variables keys and thier respective values, which they'll represent.

Since, they have been defined, we don't need to pass them as props from parent module, thus making the entire code look more cleaner in the parent component

NOTE: the default props value should be destructured the same way and alongwith other values, which have been transitioned through props.
*/
