import React from 'react';
import styles from './form_Covid.module.css';

import { useFormik } from 'formik';

const initialValues = {
	fname: '',
	lname: '',
	email: '',
	dateRangeStart: '',
	dateRangeEnd: '',
	TestingDates: '',
};

const onSubmit = (values) => {
	console.log('Form Date', values);
};

const validate = (values) => {
	let errors = {};

	if (!values.fname) {
		errors.fname = 'First name is mandatory';
	}
	if (!values.lname) {
		errors.lname = 'Last name is mandatory';
	}
	if (!values.email) {
		errors.email = 'Email ID is mandatory';
	} else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid Email Format';
	}

	if (!values.dateRangeStart) {
		errors.dateRangeStart = 'Select your first date';
	}
	if (!values.dateRangeEnd) {
		errors.dateRangeEnd = 'Select your last date';
	}
	if (!values.TestingDates) {
		errors.TestingDates = 'Select your testing date';
	}
	return errors;
};

const FormCovid = () => {
	const formik = useFormik({ initialValues, onSubmit, validate });

	return (
		<div className={styles.form}>
			<form
				action='/action_page.php'
				method='get'
				onSubmit={formik.handleSubmit}
			>
				<label htmlFor='fname'>First name:</label>
				<input
					type='text'
					id='fname'
					name='fname'
					onChange={formik.handleChange}
					value={formik.values.fname}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.fname ? <div> {formik.errors.fname}</div> : null}

				<label htmlFor='lname'>Last name: </label>
				<input
					type='text'
					id='lname'
					name='lname'
					onChange={formik.handleChange}
					value={formik.values.lname}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
				<label htmlFor='email'>Email: </label>
				<input
					type='email'
					id='email'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}
				<label htmlFor='dateRangeStart'>Date Period Start </label>
				<input
					type='date'
					id='dateRangeStart'
					name='dateRangeStart'
					onChange={formik.handleChange}
					value={formik.values.dateRangeStart}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.dateRangeStart ? (
					<div>{formik.errors.dateRangeStart}</div>
				) : null}
				<label htmlFor='dateRangeEnd'>Date Period End </label>
				<input
					type='date'
					id='dateRangeEnd'
					name='dateRangeEnd'
					onChange={formik.handleChange}
					value={formik.values.dateRangeEnd}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.dateRangeEnd ? (
					<div>{formik.errors.dateRangeEnd}</div>
				) : null}
				<label htmlFor='TestingDates'>Testing Dates</label>
				<input
					type='date'
					id='TestingDates'
					name='TestingDates'
					onChange={formik.handleChange}
					value={formik.values.TestingDates}
				/>
				<br />
				{/*  conditional rendering */}
				{formik.errors.TestingDates ? (
					<div>{formik.errors.TestingDates}</div>
				) : null}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default FormCovid;
