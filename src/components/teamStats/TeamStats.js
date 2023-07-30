import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTeamStats } from '../../redux/teamStats/teamStatsSlice';
// import BackButton from './BackButton';

const TeamStats = () => {
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const teamStats = useSelector((state) => state.teamStats);

  useEffect(() => {
    dispatch(fetchTeamStats(teamId));
  }, [dispatch, teamId]);

  if (teamStats.loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {teamStats.teamStats && (
        <>
          {/* Render the data you want to display */}
          <img src={teamStats.teamStats.team.logo} alt="Logo" />
          <p>{teamStats.teamStats.team.name}</p>
          {/* Add more elements to display other data as needed */}
        </>
      )}
    </div>
  );
};

export default TeamStats;
