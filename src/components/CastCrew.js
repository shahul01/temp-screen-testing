import PropTypes from "prop-types";
const CastCrew = ({ title, nameList }) => {
  return (
    <>
      <label key={title} className="cast-crew-label">
        {title}:
        {nameList.map((name, index) => (
          <p key={name} className="cast-crew-value">{index >0 ? ', ': ' '}{name}</p>
        ))}
      </label>
    </>
  );
};
CastCrew.propTypes = {
    title: PropTypes.string,
    nameList: PropTypes.array
}
export default CastCrew;
