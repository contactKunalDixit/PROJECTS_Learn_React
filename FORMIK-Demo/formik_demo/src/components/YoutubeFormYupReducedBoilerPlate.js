import React from 'react';
import { useFormik } from 'formik';
import styles from '../App.module.css';
import * as yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	channel: '',
};

const onSubmit = (values) => {
	console.log('Form Data', values);
};

const validationSchema = yup.object({
	name: yup.string().required('Required'),
	email: yup.string().email('Invalid Email format').required('Required'),
	channel: yup.string().required('Required'),
});

const YoutubeFormYupReducedBoilerPlate = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	console.log('Form Values', formik.values);
	console.log('Form Errors', formik.errors);
	console.log('Form Elements Visited', formik.touched);
	console.log(formik.getFieldProps);

	return (
		<div>
			<h1>Reduced Boiler Plate using Yup</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className={styles['form-control']}>
					{' '}
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						// onChange={formik.handleChange}
						// value={formik.values.name}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('name')} // !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"
					/>
					{/*  conditional rendering */}
					{formik.touched.name && formik.errors.name ? (
						<div className={styles.error}>{formik.errors.name}</div>
					) : null}
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='email'>E-mail</label>
					<input
						type='email'
						id='email'
						name='email'
						// onChange={formik.handleChange}
						// value={formik.values.email}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('email')} // !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"
					/>
					{/* conditional rendering */}
					{formik.touched.email && formik.errors.email ? (
						<div className={styles.error}>{formik.errors.email}</div>
					) : null}
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='channel'>Channel</label>
					<input
						type='text'
						id='channel'
						name='channel'
						// onChange={formik.handleChange}
						// value={formik.values.channel}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('channel')} // !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"
					/>
					{/* conditional rendering */}
					{formik.touched.channel && formik.errors.channel ? (
						<div className={styles.error}>{formik.errors.channel}</div>
					) : null}
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default YoutubeFormYupReducedBoilerPlate;
