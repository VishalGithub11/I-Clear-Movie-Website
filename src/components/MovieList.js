

const MovieList = (props) => {

	
	const FavouriteComponent = props.favouriteComponent;
	const DetailComponent = props.detailComponent

	return (props.movies === undefined ? <h5>Loading... </h5>:
		<>
			{props.movies.map((movie, index) => (
			
			
					<div key={movie.id} className='image-container  d-flex flex-column justify-content-start m-3'>
					<img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt='movie'></img>
					<div className=" d-flex justify-content-space-around ">
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className=' d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
					<div
						onClick={() => props.handleMovieDetailClick(movie.id)}
						className=' d-flex align-items-center justify-content-center'
					>
						<DetailComponent />

					</div>
					</div>
				</div>
			
			))}
		</>
	);
};

export default  MovieList;
