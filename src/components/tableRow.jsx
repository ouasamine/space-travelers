import PropTypes from 'prop-types';

function TableRow(props) {
  const {
    key,
    missionName,
    missionDesc,
  } = props;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{missionDesc}</td>
      <td><span className="memb-badge">NOT A MEMBER</span></td>
      <td>
        <button type="submit" className="memb-button" key={key}>
          Join Mission
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  key: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default TableRow;
