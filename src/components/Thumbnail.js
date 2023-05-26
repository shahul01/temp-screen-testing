import PropTypes from "prop-types";

const Thumbnail = ({ title }) => {
  const movieThumbnail = require("../movie-thumbnail.png");
  return (
    <div>
      <img
        src={movieThumbnail}
        className="movie-thumbnail"
        alt="movie-thumbnail"
      />
      <h3>{title}</h3>
    </div>
  );
};
Thumbnail.propTypes = {
  title: PropTypes.string
};
export default Thumbnail;
