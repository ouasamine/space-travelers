import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../apiCalls/missionsAPI';

const GET_MISSIIONS = 'handleMissions/getMessions';

const missions = createAsyncThunk(
  GET_MISSIIONS,
  async () => {
    const data = await fetchMissions();
    return data;
  },
);
const initialState = {
  missions: [],
  status: null,
};
const handleMissions = createSlice({
  name: 'handleMissions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(missions.fulfilled, (state, action) => {
      const newState = [];
      action.payload.forEach((mission) => {
        newState.push({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        });
      });
      // eslint-disable-next-line no-param-reassign
      state.missions = newState;
    });
  },
});

export { missions };
export default handleMissions.reducer;
