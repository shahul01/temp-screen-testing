import Thumbnail from "./Thumbnail";
import CastCrew from "./CastCrew";
import PropTypes from "prop-types";

const MovieDetails = ({ title, directorName, casts, genre }) => {
  return (
    <div className="catalogue-left">
      <Thumbnail title={title}></Thumbnail>
      <CastCrew
        key="dirName"
        title="Director"
        nameList={directorName}
      ></CastCrew>
      <CastCrew key="cast" title="Casts" nameList={casts}></CastCrew>
      <CastCrew key="genre" title="Genre" nameList={genre}></CastCrew>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  directorName: PropTypes.array,
  casts: PropTypes.array,
  genre: PropTypes.array
};
export default MovieDetails;
