import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Nabar from '../../components/Navbar/Nabar';

describe('Nabar component', () => {
  it('should match the snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Nabar />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
