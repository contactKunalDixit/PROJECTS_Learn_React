import React from 'react';
import styles from './newUser.module.css';
const NewUser = () => {
	return (
		<div className={styles.newUser}>
			<h1 className={styles.newUserTitle}>New User</h1>
			<form className={styles.newUserForm}>
				<div className={styles.newUserItem}>
					<label htmlFor='placeHolder'>UserName: </label>
					<input type='text' placeholder='Peter@99' id='placeHolder' />
				</div>
				<div className={styles.newUserItem}>
					<label htmlFor='userName'>Full Name: </label>
					<input type='text' placeholder='Peter Smith' id='userName' />
				</div>
				<div className={styles.newUserItem}>
					<label htmlFor='userEmail'>Email: </label>
					<input
						type='email'
						placeholder='PeterSmith@gmail.com'
						id='userEMail'
					/>
				</div>
				<div className={styles.newUserItem}>
					<label htmlFor='userPassword'>Password: </label>
					<input type='password' placeholder='Password' id='userPassword' />
				</div>
				<div className={styles.newUserItem}>
					<label htmlFor='userPhone'>Phone: </label>
					<input type='text' placeholder='+123 456 789' id='userPhone' />
				</div>
				<div className={styles.newUserItem}>
					<label htmlFor='userAdd'>Address: </label>
					<input type='text' placeholder='New York | USA' id='userAdd' />
				</div>

				<div className={styles.newUserItem}>
					<label>Gender: </label>
					<div className={styles.newUserGender}>
						<input type='radio' name='male' id='male' value='male' />
						<label htmlFor='male'>Male</label>
						<input type='radio' name='female' id='female' value='female' />
						<label htmlFor='female'>Female</label>
						<input type='radio' name='others' id='others' value='others' />
						<label htmlFor='others'>Others</label>
					</div>
				</div>
				<div className={styles.newUserItem}>
					<label>Active</label>
					<select className={styles.newUserSelect} name='active' id='active'>
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
				</div>
				<button className={styles.newUserButton}>Create</button>
			</form>
		</div>
	);
};

export default NewUser;
