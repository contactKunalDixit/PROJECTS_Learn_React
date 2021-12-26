import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../App.module.css';
import * as yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	comments: '',
};

const onSubmit = (values) => {
	console.log('Form Data :', values);
};

const validationSchema = yup.object({
	name: yup.string().required('Required'),
	email: yup.string().email('This is not valid email').required('Required'),
	comments: yup.string(),
});

const AdvancedForm1 = () => {
	return (
		<div>
			<h1>This is an Advanced Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form>
					<label htmlFor='name'>Name: </label>
					<Field type='text' id='name' name='name' />
					<ErrorMessage name='name' />
					<br />
					<br />
					<label htmlFor='email'>Email: </label>
					<Field type='text' id='email' name='email' />
					<ErrorMessage name='email' />

					<br></br>
					<label htmlFor='comments'>Comments: </label>
					<Field as='textarea' id='comments' name='comments'></Field>
				</Form>
			</Formik>
		</div>
	);
};

export default AdvancedForm1;
