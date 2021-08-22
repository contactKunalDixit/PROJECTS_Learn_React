import React from 'react';
import styles from './user.module.css';
import {
	PermIdentityOutlined,
	CakeOutlined,
	CallOutlined,
	EmailOutlined,
	HomeOutlined,
	PublishOutlined,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';

const User = () => {
	return (
		<div className={styles.user}>
			<div className={styles.userTitleContainer}>
				<h1 className={styles.userTitle}>Edit User</h1>
				<Link to='/newUser'>
					<button className={styles.userAddButton}>Create</button>
				</Link>
			</div>
			<div className={styles.userContainer}>
				<div className={styles.userShow}>
					<div className={styles.userShowTop}>
						<img
							src='https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg'
							alt=''
							className={styles.userShowImg}
						></img>
						<div className={styles.userShowTopTitle}>
							<span className={styles.userShowUserName}>Anna Baker</span>
							<span className={styles.userShowUserTitle}>
								Software Developer
							</span>
						</div>
					</div>
					<div className={styles.userShowBottom}>
						<div className={styles.userShowBottomAccDetails}>
							<div className={styles.userShowTitle}>Account Details</div>

							<div className={styles.userShowInfo}>
								<PermIdentityOutlined
									classname={styles.userShowIcon}
									style={{ marginRight: '10px' }}
								/>
								<span className={styles.userShowInfoTitle}>annabeck99</span>
							</div>
							<div className={styles.userShowInfo}>
								<CakeOutlined
									classname={styles.userShowIcon}
									style={{ marginRight: '10px' }}
								/>
								<span className={styles.userShowInfoTitle}>23/Aug/1999</span>
							</div>
						</div>

						<div className={styles.userShowBottomContactDetails}>
							<div className={styles.userShowTitle}>Contact Details</div>
							<div className={styles.userShowInfo}>
								<CallOutlined
									classname={styles.userShowIcon}
									style={{ marginRight: '10px' }}
								/>
								<span className={styles.userShowInfoTitle}>+123 213444</span>
							</div>
							<div className={styles.userShowInfo}>
								<EmailOutlined
									classname={styles.userShowIcon}
									style={{ marginRight: '10px' }}
								/>
								<span className={styles.userShowInfoTitle}>
									ann.baker@gmail.com
								</span>
							</div>
							<div className={styles.userShowInfo}>
								<HomeOutlined
									classname={styles.userShowIcon}
									style={{ marginRight: '10px' }}
								/>
								<span className={styles.userShowInfoTitle}>New | USA</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.userUpdate}>
					<span className={styles.userUpdateTitle}>Edit</span>
					<form action='#' className={styles.userUpdateForm}>
						<div className={styles.userUpdateLeft}>
							<div className={styles.userUpdateItem}>
								<label>User Name: </label>
								<input
									type='text'
									placeholder='annabeck99'
									className={styles.userUpdateInput}
								></input>
							</div>
							<div className={styles.userUpdateItem}>
								<label>Full Name: </label>
								<input
									type='text'
									placeholder='Anna Baker'
									className={styles.userUpdateInput}
								></input>
							</div>
							<div className={styles.userUpdateItem}>
								<label>Email: </label>
								<input
									type='text'
									placeholder='ann.baker@gmail.com'
									className={styles.userUpdateInput}
								></input>
							</div>
							<div className={styles.userUpdateItem}>
								<label>Phone: </label>
								<input
									type='text'
									placeholder='+123 213444'
									className={styles.userUpdateInput}
								></input>
							</div>
							<div className={styles.userUpdateItem}>
								<label>Address: </label>
								<input
									type='text'
									placeholder='New | USA'
									className={styles.userUpdateInput}
								></input>
							</div>
						</div>
						<div className={styles.userUpdateRight}>
							<div className={styles.userUpdateUpload}>
								<img
									className={styles.userUpdateImage}
									src='https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg'
									alt=''
								></img>
								<div className={styles.userUpdateicon}>
									<label htmlFor='file'>
										<PublishOutlined />
									</label>
									<input type='file' id='file' style={{ display: 'none ' }} />
								</div>
							</div>
							<button className={styles.userUpdateButton}>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
