import teamsReducer, { fetchTeams } from '../../redux/teams/teamsSlice';

describe('teamsSlice reducer', () => {
  it('should update the state correctly when fetchTeams is fulfilled', () => {
    const initialState = {
      teams: [],
      errors: [],
      loading: true,
    };

    const mockResponseData = {
      response: [
        { teamName: 'Team A', id: 1 },
        { teamName: 'Team B', id: 2 },
        { teamName: 'Team C', id: 3 },
      ],
    };

    const action = fetchTeams.fulfilled({
      rawData: mockResponseData,
      standingsData: mockResponseData.response,
    });
    const updatedState = teamsReducer(initialState, action);

    expect(updatedState.teams).toEqual(mockResponseData.response);
    expect(updatedState.errors).toBeNull();
    expect(updatedState.loading).toBe(false);
  });
});
