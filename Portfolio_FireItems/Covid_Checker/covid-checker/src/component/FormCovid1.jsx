import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './form_Covid.module.css';
import * as yup from 'yup';

const initialValues = {
	fname: '',
	lname: '',
	email: '',
	dateRangeStart: '',
	dateRangeEnd: '',
	TestingDates: '',
};

const onSubmit = (values) => {
	console.log('Form Data', values);
};

const validationSchema = yup.object({
	fname: yup.string().required('Required'),
	lname: yup.string().required('Required'),

	email: yup.string().email('Invalid Email format').required('Required'),
	dateRangeStart: yup.date().default(function () {
		return new Date();
	}),
	dateRangeEnd: yup.date().default(function () {
		return new Date();
	}),
	TestingDates: yup.date().default(function () {
		return new Date();
	}),
});

const FormCovid1 = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<Form>
				<div className={styles.form}>
					<br />
					<div className={styles['form-control']}>
						{' '}
						<label htmlFor='name'>First Name</label>
						<Field type='text' id='fname' name='fname' />
						<ErrorMessage name='fname' />
					</div>
					<div className={styles['form-control']}>
						{' '}
						<label htmlFor='lname'>Last Name</label>
						<Field type='text' id='lname' name='lname' />
						<ErrorMessage name='lname' />
					</div>
					<div className={styles['form-control']}>
						<label htmlFor='email'>E-mail</label>
						<Field type='email' id='email' name='email' />
						<ErrorMessage name='email' />
					</div>
					<div className={styles['form-control']}>
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
					</div>

					<button type='submit'>Submit</button>
				</div>
			</Form>
		</Formik>
	);
};

export default FormCovid1;
