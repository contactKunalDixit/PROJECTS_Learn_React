import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import styles from './form_Covid.module.css';
import * as yup from 'yup';
import TextError from './TextError';

const initialValues = {
	fname: '',
	lname: '',
	email: '',
	dateRangeStart: '',
	dateRangeEnd: '',
	TestingDates: '',
	social: {
		facebook: '',
		twitter: '',
	},
	phoneNumbers: ['', ''],
	phNumbers: [''], //FieldArray e.g.: dynamically controlled form feature
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
			// When you dont want validation to happen, then set these values to false. By default, these values are always true
			// validateOnBlur={false}
			// validateOnChange={false}
		>
			<Form>
				<div className={styles.form}>
					<br />
					<div className={styles['form-control']}>
						{' '}
						<label htmlFor='name'>First Name</label>
						<Field type='text' id='fname' name='fname' />
						{/* <ErrorMessage name='fname' component='div'  /> */}
						{/* name attribute is same as name attribute in Field tag 
						
						component prop helps you define what tag would b used for the error message display.
						Any html tag can be used for defining this per your requirement
						You can even use other React components

						*/}
						<ErrorMessage name='fname' component={TextError} />
					</div>
					<div className={styles['form-control']}>
						{' '}
						<label htmlFor='lname'>Last Name</label>
						<Field type='text' id='lname' name='lname' />
						{/* The below is another alternative to above. We have used a "render method" and have not created any other component but rather passed a function. This is absolutely same as defining and then passing the componenet */}
						<ErrorMessage name='lname'>
							{(errorMsg) => {
								return <div className={styles.error}>{errorMsg}</div>;
							}}
						</ErrorMessage>
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

					{/* NESTED OBJECTS */}
					<div className={styles['form-control']}>
						<label htmlFor='Facebook'>Facebook id: </label>
						<Field type='text' id='facebook' name='social.facebook' />
					</div>
					<div className={styles['form-control']}>
						<label htmlFor='twitter'>Twitter id: </label>
						<Field type='text' id='twitter' name='social.twitter' />
					</div>
					{/* ARRAYS */}
					<div className={styles['form-control']}>
						<label htmlFor='PrimaryPhone'>Primary Ctc No: </label>
						<Field type='text' id='PrimaryCtc' name='phoneNumbers[0]' />
					</div>
					<div className={styles['form-control']}>
						<label htmlFor='SecondaryPhone'>SecondaryPhone: </label>
						<Field type='text' id='SecondaryCtc' name='[phoneNumbers[1]' />
					</div>

					{/* FIELDARRAY */}
					{/* List of form fields that are dynamic */}
					<div className={styles['form-control']}>
						<label>List of phone Numbers</label>
						<FieldArray name='phNumbers'>
							{(fieldArrayProps) => {
								const { push, remove, form } = fieldArrayProps;
								const { values } = form;
								const { phNumbers } = values;
								console.log('Field Array Props', fieldArrayProps);
								console.log(form.errors);
								return (
									<div>
										{phNumbers.map((item, index) => (
											<div key={index}>
												<Field name={`phNumbers[${index}]`} />
												<button type='button' onClick={() => push(' ')}>
													{' '}
													+{' '}
												</button>

												{index > 0 && (
													<button type='button' onClick={() => remove(index)}>
														{' '}
														-{' '}
													</button>
												)}
											</div>
										))}
									</div>
								);
							}}
						</FieldArray>
					</div>
					<button type='submit'>Submit</button>
				</div>
			</Form>
		</Formik>
	);
};

export default FormCovid1;
