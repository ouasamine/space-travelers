import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.handleMissions.missions);
  const reservedRockets = rockets.map((rocket) => (rocket.reserved ? (
    <li key={rocket.id} className="list-group-item">
      {rocket.name}
    </li>
  ) : false));
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedMissions.length
              ? reservedMissions.map((mission) => (
                <li key={mission.mission_id} className="list-group-item">
                  {mission.mission_name}
                </li>
              ))
              : <p className="p-2 text-danger">Please reserve a mission</p>}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedRockets.length > 0 ? reservedRockets : <p className="p-2 text-danger">Please reserve a rocket</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
