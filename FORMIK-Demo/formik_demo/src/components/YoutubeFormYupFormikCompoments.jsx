import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

const YoutubeFormYupFormikCompoments = () => {
	// const formik = useFormik({
	// 	initialValues,
	// 	onSubmit,
	// 	validationSchema,
	// });
	//! WE DONT NEED TO MAKE USE OF USEfORMIL HOOK, WHEN WE HAVE SPECIFIC fORMIK, fORM, FIRLD AND ERRORMESSAGE COMPONENTS..SEE BELOW THE USAGE:

	// console.log('Form Values', formik.values);
	// console.log('Form Errors', formik.errors);
	// console.log('Form Elements Visited', formik.touched);
	// console.log(formik.getFieldProps);

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<Form>
				<h1>Form Using Formik, Form, Field, ErrorMessage</h1>

				<div className={styles['form-control']}>
					{' '}
					<label htmlFor='name'>Name</label>
					<Field
						type='text'
						id='name'
						name='name'
						// onChange={formik.handleChange}
						// value={formik.values.name}
						// onBlur={formik.handleBlur}
						// {...formik.getFieldProps('name')}
						// !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"outubeFormYupReducedBoilerPlate
					/>
					{/*  conditional rendering */}
					{/* {formik.touched.name && formik.errors.name ? (
						<div className={styles.error}>{formik.errors.name}</div>
					) : null} */}
					<ErrorMessage name='name' />
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='email'>E-mail</label>
					<Field
						type='email'
						id='email'
						name='email'
						// onChange={formik.handleChange}
						// value={formik.values.email}
						// onBlur={formik.handleBlur}
						// {...formik.getFieldProps('email')}
						// !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"
					/>
					{/* conditional rendering */}
					{/* {formik.touched.email && formik.errors.email ? (
						<div className={styles.error}>{formik.errors.email}</div>
					) : null} */}
					<ErrorMessage name='email' />
				</div>
				<div className={styles['form-control']}>
					<label htmlFor='channel'>Channel</label>
					<Field
						type='text'
						id='channel'
						name='channel'
						// onChange={formik.handleChange}
						// value={formik.values.channel}
						// onBlur={formik.handleBlur}
						// {...formik.getFieldProps('channel')}
						// !This one statement is an alternative to the otherwise boiler plate code (i.e. the 3 lines commented above this spread operator code).onChange, value and onBlur;  It uses an inbuilt helper function "getFieldProps" with the arguement passed being the value of the "name"  attribute. NOTE: We add a spread operator to this function call because we are not replacing the entire previous set of attributes but rather are just adding new ones to the preexisting attributes like: "type","id","name"
					/>
					{/* conditional rendering */}
					{/* {formik.touched.channel && formik.errors.channel ? (
						<div className={styles.error}>{formik.errors.channel}</div>
					) : null} */}
					<ErrorMessage name='channel' />
				</div>

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
};

export default YoutubeFormYupFormikCompoments;
