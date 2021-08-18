import React from 'react';
import styles from './sidebar.module.css';
import {
	MailOutlined,
	FeedbackOutlined,
	ChatBubbleOutlineOutlined,
} from '@material-ui/icons';

const NotificationsSidebar = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Notifications</h3>
			<ul className={styles.sidebarList}>
				<li className={styles.sidebarListItem}>
					<MailOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Mail
				</li>

				<li className={styles.sidebarListItem}>
					<FeedbackOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Feedback
				</li>
				<li className={styles.sidebarListItem}>
					<ChatBubbleOutlineOutlined
						fontSize='small'
						style={{ marginRight: '5px' }}
					/>
					Messages
				</li>
			</ul>
		</div>
	);
};

export default NotificationsSidebar;
