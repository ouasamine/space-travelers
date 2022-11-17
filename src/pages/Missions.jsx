import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '../components/TableRow';
import { joinMission, leaveMission, missions } from '../redux/missions/missions';
import '../Missions.css';

const Mission = () => {
  const data = useSelector((state) => state.handleMissions.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length < 1) {
      dispatch(missions());
    }
  }, []);

  function handleClick(id, reserved) {
    if (!reserved) {
      dispatch(joinMission(id));
    }

    if (reserved) {
      dispatch(leaveMission(id));
    }
  }
  return (
    <section id="missions-section">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripton</th>
            <th>Status</th>
            <th>{ }</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mission) => (
            <TableRow
              key={mission.mission_id}
              missionId={mission.mission_id}
              missionName={mission.mission_name}
              missionDesc={mission.description}
              missionReserved={mission.reserved}
              // eslint-disable-next-line react/jsx-no-bind
              handleClick={handleClick}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Mission;
