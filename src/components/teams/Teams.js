import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../redux/teams/teamsSlice';

function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);
  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeams());
    }
  }, [dispatch, teams.length]);

  return (
    <div className="container">
      <ul>
        {teams.map((team) => (
          <Link key={team.team.id} to={`/${team.team.id}/statistics`}>
            <li key={team.team.id}>
              <img src={team.team.logo} alt={team.team.name} />
              {team.team.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
