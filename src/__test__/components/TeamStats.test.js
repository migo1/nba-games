import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TeamStats from '../../components/teamStats/TeamStats';

const mockStore = configureStore([]);

describe('TeamStats component', () => {
  const initialState = {
    teamStats: {
      loading: false,
      teamStats: {
        team: {
          logo: 'team_logo.png',
          name: 'Team A',
        },
        games: {
          played: {
            home: 10,
            away: 8,
            all: 18,
          },
          wins: {
            home: {
              total: 6,
              percentage: '60%',
            },
            away: {
              total: 4,
              percentage: '50%',
            },
            all: {
              total: 10,
              percentage: '55.6%',
            },
          },
          loses: {
            home: {
              total: 4,
              percentage: '40%',
            },
            away: {
              total: 4,
              percentage: '50%',
            },
            all: {
              total: 8,
              percentage: '44.4%',
            },
          },
        },
        points: {
          for: {
            total: {
              home: 800,
              away: 750,
              all: 1550,
            },
            average: {
              home: 80,
              away: 93.75,
              all: 86.11,
            },
          },
          against: {
            average: {
              home: 75,
              away: 90,
              all: 82.5,
            },
          },
        },
      },
    },
  };

  it('should match the snapshot', () => {
    const store = mockStore(initialState);
    const component = renderer.create(
      <Provider store={store}>
        <TeamStats />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
