import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  teamStats: {},
  results: 0,
  loading: true,
};

export const fetchTeamStats = createAsyncThunk(
  'teamStats/fetchTeamStats',
  async (teamId, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://api-basketball.p.rapidapi.com/statistics',
        {
          params: {
            season: '2019-2020',
            team: teamId,
            league: '12',
          },
          headers: {
            'X-RapidAPI-Key':
              '5596b6f0f0msh2006d3b206620f1p1e5cc4jsn6cd1e2ac472d',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
          },
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const teamStatsSlice = createSlice({
  name: 'teamStats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamStats.pending, (state) => {
        state.results = 0;
        state.loading = true;
      })
      .addCase(fetchTeamStats.fulfilled, (state, action) => {
        state.teamStats = action.payload.response;
        state.results = action.payload.results;
        state.loading = false;
      })
      .addCase(fetchTeamStats.rejected, (state) => {
        state.results = 0;
        state.loading = true;
      });
  },
});

export default teamStatsSlice.reducer;
