import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missions } from '../missionsRedux/missions';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missions());
  }, []);
  const data = useSelector((state) => state.missions);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripton</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </section>
  );
};
export default Mission;
