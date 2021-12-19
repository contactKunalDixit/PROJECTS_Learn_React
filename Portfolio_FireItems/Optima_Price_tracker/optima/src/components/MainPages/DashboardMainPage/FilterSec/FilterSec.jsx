import React from 'react';
import styles from './filterSec.module.css';

const FilterSec = () => {
	return (
		<div className={styles.filterSec}>
			<div className={styles.filterElements}>
				<button type='submit' className={styles.Filterbutton}>
					Filter {'>'}
				</button>

				<div className={styles.filteredResult}>
					<span className={styles.filteredItems}>Room Type: All</span>
					<span className={styles.filteredItems}>No. of Guests: 1 </span>
					<span className={styles.filteredItems}>Length of Stay: 2</span>
				</div>
			</div>
		</div>
	);
};

export default FilterSec;
