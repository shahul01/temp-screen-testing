import PropTypes from "prop-types";

const MovieList = ({ title, onSelect, movieId, selectedMovieId }) => {
  return (
    <div
      className={
        movieId === selectedMovieId ? "row-selection row-list" : "row-list"
      }
      key={movieId}
      onClick={() => onSelect(movieId)}
    >
      <p>{title}</p>
    </div>
  );
};
MovieList.propTypes = {
  title: PropTypes.string,
  onSelect: PropTypes.func,
  movieId: PropTypes.number,
  selectedMovieId: PropTypes.number
};
export default MovieList;
