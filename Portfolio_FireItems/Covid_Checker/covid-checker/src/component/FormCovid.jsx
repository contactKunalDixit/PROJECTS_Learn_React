import React from 'react';
import styles from './form_Covid.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
	// fname: '',
	// lname: '',
	email: '',
	// dateRangeStart: '',
	// dateRangeEnd: '',
	// TestingDates: '',
};

const onSubmit = (values) => {
	console.log('Form Data', values);
};

const validationSchema = yup.object({
	fname: yup.string().required('Required'),
	lname: yup.string().required('Required'),
	email: yup.string().email('Invalid Email format').required('Required'),

	// fname: yup.string().required('Required'),
	// lname: yup.string().required('Required'),
	// email: yup.string().email('Invalid Email format').required('Required'),
	// dateRangeStart: yup.date().default(function () {
	// 	return new Date();
	// }),
	// dateRangeEnd: yup.date().default(function () {
	// 	return new Date();
	// }),
	// TestingDates: yup.date().default(function () {
	// 	return new Date();
	// }),
});

const FormCovid = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validateSchema={validationSchema}
		>
			{/* <div className={styles.form}> */}
			<Form>
				{/* <div className={styles['form-control']}>
						<label htmlFor='fname'>First name:</label>
						<Field type='text' id='fname' name='fname' />

						<ErrorMessage name='fname' />
					</div>

					<div className={styles['form-control']}>
						<label htmlFor='lname'>Last name: </label>
						<Field type='text' id='lname' name='lname' />
						<ErrorMessage name='lname' />
					</div> */}
				{/* <div className={styles['form-control']}>
						<label htmlFor='email'>Email: </label>
						<Field type='email' id='email' name='email' />
						<ErrorMessage name='email' />
					</div> */}
				{/* <div className={styles['form-control']}>
						<label htmlFor='dateRangeStart'>Date Period Start </label>
						<Field type='date' id='dateRangeStart' name='dateRangeStart' />
						<ErrorMessage name='dateRangeStart' />
					</div>
					<div className={styles['form-control']}>
						<label htmlFor='dateRangeEnd'>Date Period End </label>
						<Field type='date' id='dateRangeEnd' name='dateRangeEnd' />
						<ErrorMessage name='dateRangeEnd' />
					</div>
					<div className={styles['form-control']}>
						<label htmlFor='TestingDates'>Testing Dates</label>
						<Field type='date' id='TestingDates' name='TestingDates' />
						<ErrorMessage name='TestingDates' />
					</div> */}
				<div>
					<Field type='email' id='email' name='email' />
					<ErrorMessage name='email' />
				</div>
				<button type='submit'>Submit</button>
			</Form>
			{/* </div> */}
		</Formik>
	);
};

export default FormCovid;
