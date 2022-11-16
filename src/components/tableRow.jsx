import PropTypes from 'prop-types';

function TableRow(props) {
  const { key, missionName, missionDesc } = props;
  return (
    <tr key={key}>
      <td>{missionName}</td>
      <td>{missionDesc}</td>
      <td>being constructed</td>
      <td>being constructed</td>
    </tr>
  );
}

TableRow.propTypes = {
  key: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default TableRow;
