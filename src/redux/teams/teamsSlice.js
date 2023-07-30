import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  teams: [],
  errors: [],
};

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(
        'https://api-basketball.p.rapidapi.com/standings',
        {
          params: {
            league: '12',
            season: '2019-2020',
          },
          headers: {
            'X-RapidAPI-Key':
              '5596b6f0f0msh2006d3b206620f1p1e5cc4jsn6cd1e2ac472d',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
          },
        },
      );
      const standingsData = resp.data.response[0].slice(0, 30);

      return { rawData: resp.data, standingsData };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.errors = [];
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.teams = action.payload.standingsData;
        state.errors = null;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.errors = action.payload.rawData.errors;
      });
  },
});

export default teamsSlice.reducer;
