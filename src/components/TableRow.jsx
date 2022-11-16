import PropTypes from 'prop-types';

function TableRow(props) {
  const {
    missionId,
    missionName,
    missionDesc,
    missionReserved,
    handleClick,
  } = props;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{missionDesc}</td>
      <td>
        {!missionReserved && <span className="memb-badge">NOT A MEMBER</span>}
        {missionReserved && <span className="memb-badge active-badge">Active Member</span>}
      </td>
      <td>
        {!missionReserved && (
        <button
          type="submit"
          className="memb-btn"
          key={missionId}
          onClick={() => {
            handleClick(missionId, missionReserved);
          }}
        >
          Join Mission
        </button>
        )}
        {missionReserved && (
        <button
          type="submit"
          className="memb-btn active-btn"
          key={missionId}
          onClick={() => {
            handleClick(missionId, missionReserved);
          }}
        >
          Leave Mission
        </button>
        )}
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TableRow;
