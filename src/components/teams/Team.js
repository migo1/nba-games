import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './team.css';

function Team({ team, index }) {
  return (
    <Link to={`/${team.team.id}/statistics`}>
      <li
        key={team.team.id}
        className={`flex justify-between p-12 ${
          index % 4 === 1 || index % 4 === 2 ? 'bg-sky-900' : 'bg-sky-800'
        } team-item`}
      >
        <img
          src={team.team.logo}
          alt={team.team.name}
          className="h-44 w-80 image object-contain"
        />
        <div className="flex flex-col text-right">
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="text-3xl ml-auto text-white toggleHide"
          />
          <div className="mt-auto flex flex-col">
            <p className="text-white">{team.group.name}</p>
            <h3 className="text-white text-2xl font-semibold team-name">
              {team.team.name}
            </h3>
            <p className="text-white text-xl">
              Position:
              {team.position}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    team: PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    group: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    position: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Team;
