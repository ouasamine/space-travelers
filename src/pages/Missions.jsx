import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '../components/TableRow';
import { missions } from '../missionsRedux/missions';
import '../Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missions());
  }, []);
  const data = useSelector((state) => state.missions);
  return (
    <section id="missions-section">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripton</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mission) => (
            <TableRow
              key={mission.mission_id}
              missionName={mission.mission_name}
              missionDesc={mission.description}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Mission;
