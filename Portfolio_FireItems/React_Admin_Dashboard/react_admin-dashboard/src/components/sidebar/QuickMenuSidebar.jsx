import React from 'react';
import styles from './sidebar.module.css';
import {
	PersonOutline,
	StorefrontOutlined,
	AttachMoney,
	AssessmentOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const QuickMenuSidebar = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Quick Menu</h3>
			<ul className={styles.sidebarList}>
				<Link to='/users' className={styles.link}>
					<li className={styles.sidebarListItem}>
						<PersonOutline fontSize='small' style={{ marginRight: '5px' }} />
						Users
					</li>
				</Link>
				<Link to='/products' className={styles.link}>
					<li className={styles.sidebarListItem}>
						<StorefrontOutlined
							fontSize='small'
							style={{ marginRight: '5px' }}
						/>
						Products
					</li>
				</Link>

				<li className={styles.sidebarListItem}>
					<AttachMoney fontSize='small' style={{ marginRight: '5px' }} />
					Transactions
				</li>
				<li className={styles.sidebarListItem}>
					<AssessmentOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Reports
				</li>
			</ul>
		</div>
	);
};

export default QuickMenuSidebar;
