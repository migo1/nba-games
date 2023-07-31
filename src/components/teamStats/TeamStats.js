import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTeamStats } from '../../redux/teamStats/teamStatsSlice';
import './teamStats.css';

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
    <div className="">
      {teamStats.teamStats && (
        <div>
          <div className="bg-sky-600 py-3 px-12 flex justify-between mb-4">
            <img
              src={teamStats.teamStats.team.logo}
              alt={teamStats.teamStats.team.name}
            />
            <div className="flex flex-col">
              <div className="mt-auto text-right">
                <h3 className="text-white text-4xl font-semibold">
                  {teamStats.teamStats.team.name}
                </h3>
                <p className="text-xl font-semibold text-white">
                  Average PPG :
                  {teamStats.teamStats.points.for.average.all}
                </p>
              </div>
            </div>
          </div>
          <ul>
            <h3 className="pl-12 text-white mb-2 text-lg">GAMES</h3>
            <li className="list-stats">
              <p>Played Home</p>
              <p>{teamStats.teamStats.games.played.home}</p>
            </li>
            <li className="list-stats">
              <p>Played Away</p>
              <p>{teamStats.teamStats.games.played.away}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamStats;
