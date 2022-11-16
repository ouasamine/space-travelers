import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { missions } from '../missionsRedux/missions';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missions());
  }, []);
  // const data = useSelector((state) => state.missions);
};
export default Mission;
