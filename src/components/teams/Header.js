import React from 'react';
import PropTypes from 'prop-types';

function Header({ searchQuery, handleSearchInputChange }) {
  return (
    <div className="flex justify-between w-12/12 mx-auto bg-sky-950 py-3 px-12 items-center">
      <p className="text-white">NBA Teams Standings for Season 2019 - 2020</p>
      <input
        type="text"
        placeholder="Search teams by name"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="w-4/12 px-3 py-2 rounded-md"
      />
    </div>
  );
}

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
};
export default Header;
