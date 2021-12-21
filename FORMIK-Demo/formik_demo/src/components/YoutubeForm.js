import React from 'react';
import { useFormik } from 'formik';
import styles from '../App.module.css';

const initialValues = {
	name: '',
	email: '',
	channel: '',
};

const onSubmit = (values) => {
	console.log('Form Data', values);
};

const validate = (values) => {
	// 3 Rules for the validate method:
	//Should return an error object
	//The error object shouldve same nomenclature as values object key names which inturn are same as name attribute of the HTML input tags e.g.
	//values.name, values.channel, values.email
	//errors.name,errors.channel,errors.emailjs
	//errors.name should store a string value e.g.
	//errors.name = "This field is required"
	let errors = {};
	if (!values.name) {
		errors.name = 'Name is Required';
	}

	if (!values.email) {
		errors.email = 'Email is Required';
	} else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid Email Format';
	}
	if (!values.channel) {
		errors.channel = 'Channel name is Required';
	}

	return errors;
};

const YoutubeForm = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	});
	// useFormik() hook accepts an object and returns an object which has been stored here under name "formik". The formik object will comprise of useful properties and methods that we'll be able to use for managing states of form elements, handling foprm submission and form validation and error msgs.
	/*
    ! STEPS TO ADD FORMIK

    ! Manage State in the Form
    
	1.  1st property is an "initialValues" object which holds initial values of all input fields in the form. the name for each of the keys in this object "initialValues" corresponds to value in the name attribute of the input element. For this case, since we are just starting, thus keeping the initial values as blank.
    2.  Add onChange={} and value={} prop to each of the form field. This is essential to ensure form field and input fields values are automatically tracked in React, by formik

    3. The flow is as follows: 

    initial values are passed as arguement in the useFormik hook and the resulting object is stored in the "formik" variable name.
    
    the initial values are stored in "formik.values" 

    then when the user enters thier input and changes form field states, the onChange handler gets triggered and updates the elements within formik.values

    which then updates the "value" attribute in the respective and corresponding input field.  

    

	! Thus, At any point, formik.values will give us access to form data
	

    ! Add Submission process
    4.  Add onSubmit attribute to form tag and set its value to {formik.handleSubmit}  

    5.  Then, Add another method to useFormik hook i.e. onSubmit() which passes the parameter "value", which is nothing else but "formik.values" that we've referred before.

    ! Form Validation:

    6. The third arguement we pass to useFormik is a method "validate" which returns an error object, the rule for which have been defined earlier in the method
    
    */
	// console.log('Form Values', formik.values);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className={styles['form-control']}>
					{' '}
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
					{/*  conditional rendering */}
					{formik.errors.name ? (
						<div className={styles.error}>{formik.errors.name}</div>
					) : null}
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='email'>E-mail</label>
					<input
						type='email'
						id='email'
						name='email'
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{/* conditional rendering */}
					{formik.errors.email ? (
						<div className={styles.error}>{formik.errors.email}</div>
					) : null}
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='channel'>Channel</label>
					<input
						type='text'
						id='channel'
						name='channel'
						onChange={formik.handleChange}
						value={formik.values.channel}
					/>
					{/* conditional rendering */}
					{formik.errors.channel ? (
						<div className={styles.error}>{formik.errors.channel}</div>
					) : null}
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default YoutubeForm;
