import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import handleMissions from './missions/missions';

const store = configureStore({
  reducer: {
    handleMissions,
    rockets: rocketsSlice.reducer,
  },
});

export default store;
