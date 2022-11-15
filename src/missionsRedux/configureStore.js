import { configureStore } from '@reduxjs/toolkit';
import handleMissions from './missions';

const store = configureStore({
  reducer: handleMissions,
});

export default store;
