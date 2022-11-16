import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from '../rocketsRedux/rocketsSlice';
import handleMissions from './missions';

const store = configureStore({
  reducer: {
    handleMissions,
    rockets: rocketsSlice.reducer,
  },
});

export default store;
