import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
	state = {
		movies: getMovies(),
	};

	handleDelete = (placeholder) => {
		const newMovies = this.state.movies.filter((item) => {
			return item._id !== placeholder._id;
		});
		this.setState({ movies: newMovies });
	};

	render() {
		const { length: count } = this.state.movies; //Destructring length property and renaming it to count for convenience

		if (count === 0) {
			return <p> No movies to display, Please refresh</p>;
		}

		return (
			<>
				<p>Showing {count} movies from the database</p>
				<table className='table'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((i) => {
							return (
								<tr key={i._id}>
									<td>{i.title}</td>
									<td> {i.genre.name}</td>
									<td>{i.numberInStock}</td>
									<td>{i.dailyRentalRate}</td>
									<td>
										{' '}
										<button
											onClick={() => {
												this.handleDelete(i);
											}}
											className='btn btn-danger btn-sm'
										>
											Delete
										</button>{' '}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
}

export default Movies;
