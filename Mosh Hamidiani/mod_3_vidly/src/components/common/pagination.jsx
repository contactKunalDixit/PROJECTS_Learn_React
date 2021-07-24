/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
const Pagination = (props) => {
	const { itemsCount, pageSize, onPageChange, currentPage } = props;
	console.log(currentPage);
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1); //This function has been used from a lodash library ; This function returns an array of range of 1st arguement's value and second arguement's values and stores this range in the pages variable

	return (
		<nav>
			<ul className='pagination'>
				{pages.map((page) => (
					// eslint-disable-next-line react/jsx-no-comment-textnodes
					<li
						className={page === currentPage ? 'page-item active' : 'page-item'}
						key={page}
					>
						<a
							onClick={() => {
								onPageChange(page);
							}}
							className='page-link'
						>
							{page}{' '}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};

export default Pagination;
