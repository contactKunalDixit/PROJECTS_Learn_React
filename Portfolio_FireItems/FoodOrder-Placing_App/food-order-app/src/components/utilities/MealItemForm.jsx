import React, { useRef, useState } from 'react';
import styles from './mealItemForm.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';
import Input from '../../components/utilities/Input';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAMountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAMountNumber < 0 ||
			enteredAMountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAMountNumber);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className={styles.left}>
				<button className={styles.Qtybutton}>
					<BsFillPlusSquareFill
						style={{ fontSize: '32px', fontWeight: '600' }}
					/>
				</button>
			</div>
			<div className={styles.center}>
				<Input
					// label='Amount'
					ref={amountInputRef}
					input={{
						id: 'amount_' + props.id, // this changed!,
						type: 'number',
						min: '1',
						max: '5',
						step: '1',
						defaultValue: '0',
					}}
				></Input>
			</div>
			<div className={styles.right}>
				<button className={styles.Qtybutton}>
					<AiFillMinusSquare style={{ fontSize: '41px', fontWeight: '600' }} />
				</button>
				{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
			</div>
		</form>
	);
};

export default MealItemForm;
