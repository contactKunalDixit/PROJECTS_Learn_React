import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

import { paginate } from '../utils/paginate';

class Movies extends Component {
	state = {
		movies: getMovies(),
		pageSize: 4,
		currentPage: 1,
	};

	handleDelete = (placeholder) => {
		const newMovies = this.state.movies.filter((item) => {
			return item._id !== placeholder._id;
		});
		this.setState({ movies: newMovies });
	};

	handleLike = (movieItem) => {
		console.log(movieItem);
		const newMovies = [...this.state.movies];
		const index = newMovies.indexOf(movieItem);

		newMovies[index] = { ...movieItem };
		newMovies[index].liked = !newMovies[index].liked;
		this.setState({ movies: newMovies });
	};

	handlePageChange = (newPageNo) => {
		this.setState({ currentPage: newPageNo });
	};

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, movies } = this.state;
		//Destructring properties and renaming it to count for convenience..and destructuring others for clean code sake
		if (count === 0) {
			return <p> No movies to display, Please refresh</p>;
		}

		const paginatedMovies = paginate(movies, currentPage, pageSize);

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
													this.handleLike(i);
												}}
											></Like>
										}
									</td>

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
				<Pagination // *1
					itemsCount={count}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				></Pagination>
			</>
		);
	}
}

export default Movies;

/* 
1 	itemsCount = total number of items to be displayed
	pageSize =  Items to be accomodated on each page

*/
