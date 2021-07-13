import './Card.css';

// This is a 'container' component which acts as a shell around other components. It has been created for UI only. Being a component, it can be used repeatedely.

function Card(props) {
	const classes = 'card ' + props.className;

	return <div className={classes}>{props.children}</div>;
}

export default Card;
