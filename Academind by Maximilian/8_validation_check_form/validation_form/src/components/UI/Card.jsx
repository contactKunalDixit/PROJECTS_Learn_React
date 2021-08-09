import React from 'react';
import classes from './Card.module.css';
const Card = (props) => {
	return (
		<div className={`${classes.card} ${props.className}`}>{props.children}</div>
	);
};

export default Card;

/* 

props.children is used on components that represent ‘generic boxes’ and that don’t know their children ahead of time.

props.children is used to display whatever you include between the opening and closing tags when invoking a component.

*/

/*
  'props.className' is being passed as any other props from the parent to the child component.
  This is being done because unlike other html elements e.g. label, form, input..Card is our own created customized component and hence would not understand what 'className' should do. It just treats className as any other named attribute that we have witnessed in the customised components. Thus we pass it as any other props and then define it in the child component i.e. in here above <div> where the <div> woul;d understand that 'className' is an alternative for 'class' in React
 */
