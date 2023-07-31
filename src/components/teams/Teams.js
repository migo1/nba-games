import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../redux/teams/teamsSlice';

function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);
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

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search teams by name"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredTeams.map((team) => (
          <Link key={team.team.id} to={`/${team.team.id}/statistics`}>
            <li key={team.team.id}>
              <img src={team.team.logo} alt={team.team.name} />
              {team.team.name}
              <div>
                <span>
                  Conf:
                  {team.group.name}
                  Position:
                  {team.position}
                </span>
                <span>
                  points for:
                  {team.points.for}
                </span>
                <span>
                  points against:
                  {team.points.against}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
