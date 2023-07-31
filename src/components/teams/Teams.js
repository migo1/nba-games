import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchTeams } from '../../redux/teams/teamsSlice';

function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);
  const loading = useSelector((state) => state.teams.loading);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeams());
    }
  }, [dispatch, teams.length]);

  const filteredTeams = teams.filter((team) => team.team.name.toLowerCase()
    .includes(searchQuery.toLowerCase()));

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const teamWithHighestPoints = teams.reduce(
    (maxTeam, currentTeam) => (
      currentTeam.points.for > maxTeam.points.for
        ? currentTeam
        : maxTeam),
    teams[0],
  );

  return (
    <div>
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <div className="bg-sky-600 px-12 py-3 flex justify-between">
          <img
            src={teamWithHighestPoints.team.logo}
            alt={teamWithHighestPoints.team.name}
          />
          <div className="flex flex-col">
            <p className="text-white text-3xl font-semibold">Team With Highest Points</p>
            <div className="mt-auto text-right">
              <h3 className="text-white text-4xl font-semibold">
                {teamWithHighestPoints.team.name}
              </h3>
              <p className="text-2xl font-semibold text-white">
                Points:
                {teamWithHighestPoints.points.for}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between w-12/12 mx-auto bg-sky-950 py-3 px-12">
        <p className="text-white">NBA Teams Standigs for Season 2019 - 2020</p>
        <input
          type="text"
          placeholder="Search teams by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <ul className="grid grid-cols-2 pb-3 w-12/12 mx-auto">
          {filteredTeams.map((team, index) => (
            <Link key={team.team.id} to={`/${team.team.id}/statistics`}>
              <li
                key={team.team.id}
                className={`flex justify-between p-12 ${
                  index % 4 === 1 || index % 4 === 2
                    ? 'bg-sky-900'
                    : 'bg-sky-800'
                } `}
              >
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  className=" h-44 w-80 object-contain"
                />
                <div className="flex flex-col text-right">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-3xl ml-auto text-white"
                  />
                  <div className="mt-auto flex flex-col">
                    <h3 className="text-white text-2xl font-semibold">
                      {team.team.name}
                    </h3>
                    <p className="text-white text-xl">
                      points :
                      {team.points.for}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;
