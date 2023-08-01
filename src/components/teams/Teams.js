import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTeams } from '../../redux/teams/teamsSlice';
import Team from './Team';
import Header from './Header';
import MostPoints from './MostPoints';

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

  const teamWithMostPoints = teams.reduce(
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
        <MostPoints teamWithMostPoints={teamWithMostPoints} />
      )}

      <Header
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
      />

      <div>
        <ul className="grid grid-cols-2 pb-3 w-12/12 mx-auto">
          {filteredTeams.map((team, index) => (
            <Team key={team.team.id} team={team} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;
