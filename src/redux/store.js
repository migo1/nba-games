import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams/teamsSlice';
import teamStatsReducer from './teamStats/teamStatsSlice';

const store = configureStore({
  reducer: {
    teams: teamsReducer,
    teamStats: teamStatsReducer,
  },
});

export default store;
