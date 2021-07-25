import React, { Component } from 'react';
import Like from './common/like';
const MoviesTable = (props) => {
	const { paginatedMovies, onLike, onDelete } = props;
	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Genre</th>
					<th>Stock</th>
					<th>Rate</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{paginatedMovies.map((i) => {
					return (
						<tr key={i._id}>
							<td>{i.title}</td>
							<td> {i.genre.name}</td>
							<td>{i.numberInStock}</td>
							<td>{i.dailyRentalRate}</td>

							<td>
								{
									<Like
										liked={i.liked}
										onClick={() => {
											onLike(i);
										}}
									></Like>
								}
							</td>

							<td>
								<button
									onClick={() => {
										onDelete(i);
									}}
									className='btn btn-danger btn-e'
									// valueProperty='_id'sm'
								>
									Delete
								</button>{' '}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default MoviesTable;
