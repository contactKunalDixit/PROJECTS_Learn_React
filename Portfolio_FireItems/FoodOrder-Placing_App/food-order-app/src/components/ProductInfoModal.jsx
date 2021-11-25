import React from 'react';
import ModalReadMore from './utilities/ModalReadMore';
import styles from './productInfoModal.module.css';

const ProductInfoModal = (props) => {
	return (
		<ModalReadMore>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Product</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
					perspiciatis accusantium ullam! Iste doloremque laboriosam minima
					obcaecati. Quasi modi laboriosam beatae laudantium quam, optio odio.
					Aperiam tempore eum temporibus dolor Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Rem necessitatibus consequatur vel totam
					praesentium. Nesciunt quos velit dolorum incidunt hic.
				</p>
			</div>
		</ModalReadMore>
	);
};

export default ProductInfoModal;
