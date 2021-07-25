import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
	};

	componentDidMount() {
		const genres = [{ name: 'All Genres' }, ...getGenres()]; // 4
		this.setState({ movies: getMovies(), genres: genres });
	}

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

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, currentPage: 1 }); // 3.1 && 3.2
	};

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, selectedGenre, movies } = this.state; // 5

		if (count === 0) {
			return <p> No movies to display, Please refresh</p>;
		}
		const filteredMovies =
			selectedGenre && selectedGenre._id // 6
				? movies.filter((m) => m.genre._id === selectedGenre._id)
				: movies;
		const paginatedMovies = paginate(filteredMovies, currentPage, pageSize); //7

		return (
			<div className='row'>
				<div className='col-3'>
					<ListGroup
						items={this.state.genres}
						selectedItem={this.state.selectedGenre}
						onItemSelect={this.handleGenreSelect}

						// textProperty='name'	//2
						// valueProperty='_id'	//2
					></ListGroup>
				</div>
				<div className='col'>
					<p>Showing {filteredMovies.length} movies from the database</p>
					<MoviesTable
						paginatedMovies={paginatedMovies}
						Like={this.Like}
						onDelete={this.handleDelete}
						onLike={this.handleLike}
					></MoviesTable>
					<Pagination // *1
						itemsCount={filteredMovies.length}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					></Pagination>
				</div>
			</div>
		);
	}
}

export default Movies;

/* 
1 	itemsCount = total number of items to be displayed
	pageSize =  Items to be accomodated on each page

2 *	The 'valueProperty' and the 'textProperty' have been added so that we can have more flexibility. Not always would it happen that the items being resourced would have key names as '_id' and 'name'. They could be different, thus in here, we are using variables 'valueProperty' and 'textProperty' which could be assigned different values depending upon the source key names

 In here, the variable 'valueProperty' has been assigned '_id' and 'textProperty' has been assigned "name"

 Another more effective way of defining these as default values is to define them as default Props as shown with the e.g. of ListGroup. Since, they have been defined, we don't need to pass them as props from parent module, thus making the entire code look more cleaner.


3.1*	OBSERVE - How 'selectedGenre' had NOT been assigned initialised or set before unlike other variables who had an intial existance or initial initiated value. SelectedGenre had NOT been set because it was not required to have an intial existance. 


3.2* 	currentPage has been set to 1 so that everytime a genre is selected, it resets the currentPage to 1; the filteration happens for all the movies and not just the specific page say page 2 Movies, if the user wouldve moved to page 2

 

4* above variable 'genres' has been created to include 'All Genres' element which isnt part of the data coming through source

5* //Destructring properties and renaming it to count for convenience..and destructuring others for clean code sake


6* 	If selected genre AND the id of the selectedGenre are both truthy, we are filtering ; else all movies shows


7*	PaginatedMovies is an array recieved through a customised function created through lodash library

*/
