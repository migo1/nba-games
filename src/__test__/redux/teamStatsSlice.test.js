import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import teamStatsReducer, { fetchTeamStats } from '../../redux/teamStats/teamStatsSlice';

jest.mock('axios');
const mockStore = configureMockStore([thunk]);

describe('teamStatsSlice reducer', () => {
  afterEach(() => {
    axios.get.mockClear();
  });

  it('should update the state correctly when fetchTeamStats is fulfilled', () => {
    const initialState = {
      teamStats: {},
      results: 0,
      loading: true,
    };

    const mockTeamId = 133;
    const mockResponseData = {
      results: 5,
      response: {
        team: {
          id: mockTeamId,
          name: 'Boston Celtics',
          logo: null,
        },
      },
    };

    axios.get.mockResolvedValue({ data: mockResponseData });

    const store = mockStore(initialState);

    return store.dispatch(fetchTeamStats(mockTeamId)).then(() => {
      const actions = store.getActions();

      expect(actions).toHaveLength(2);
      expect(actions[0]).toMatchObject({
        type: 'teamStats/fetchTeamStats/pending',
        meta: { arg: mockTeamId, requestId: expect.anything() },
      });
      expect(actions[1]).toMatchObject({
        type: 'teamStats/fetchTeamStats/fulfilled',
        payload: mockResponseData,
        meta: { arg: mockTeamId, requestId: expect.anything() },
      });

      const updatedState = teamStatsReducer(initialState, actions[1]);
      expect(updatedState.teamStats).toEqual(mockResponseData.response);
      expect(updatedState.results).toEqual(mockResponseData.results);
      expect(updatedState.loading).toBe(false);
    });
  });
});
