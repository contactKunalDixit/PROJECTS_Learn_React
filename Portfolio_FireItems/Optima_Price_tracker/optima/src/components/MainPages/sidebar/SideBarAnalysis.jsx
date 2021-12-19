import React from 'react';
import styles from './sidebar.module.css';
import {
	PersonOutline,
	StorefrontOutlined,
	AttachMoney,
	AssessmentOutlined,
} from '@material-ui/icons';
import { TiShoppingCart } from 'react-icons/ti';

import { Link } from 'react-router-dom';
import { GrDocumentDownload } from 'react-icons/gr';
const SideBarAnalysis = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Quick Menu</h3>
			<ul className={styles.sidebarList}>
				<Link to='/users' className={styles.link}>
					<li className={styles.sidebarListItem}>
						<TiShoppingCart fontSize='22px' style={{ marginRight: '5px' }} />
						onDemand-Report Shop
					</li>
				</Link>
				<Link to='/products' className={styles.link}>
					<li className={styles.sidebarListItem}>
						<GrDocumentDownload
							fontSize='18px'
							style={{ marginRight: '5px' }}
						/>
						Download Reports
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default SideBarAnalysis;
