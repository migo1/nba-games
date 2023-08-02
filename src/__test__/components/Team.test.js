import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to wrap the Link component
import Team from '../../components/teams/Team';

describe('Team component', () => {
  const mockTeam = {
    team: {
      id: 1,
      name: 'Team A',
      logo: 'teamA_logo.png',
    },
    group: {
      name: 'Group 1',
    },
    position: 1,
  };

  it('should match the snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Team team={mockTeam} index={0} />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
