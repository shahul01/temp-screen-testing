import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import PropTypes from "prop-types";

const Catalogue = ({ MovieCatalogue, onSelect, selectedMovie }) => {
  return (
    <div>
      {selectedMovie.map((movie) => (
        <MovieDetails
          key={movie.id}
          title={movie.movieName}
          directorName={movie.director}
          casts={movie.casts}
          genre={movie.genre}
        ></MovieDetails>
      ))}
      <div className="catalogue-right">
        {MovieCatalogue.map((movie) => (
          <MovieList
            key={movie.id}
            title={movie.movieName}
            onSelect={onSelect}
            movieId={movie.id}
            selectedMovieId={selectedMovie[0].id}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

Catalogue.propTypes = {
  MovieCatalogue: PropTypes.array,
  onSelect: PropTypes.func,
  selectedMovie: PropTypes.array
};

export default Catalogue;
