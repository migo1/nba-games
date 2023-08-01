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
            <h3 className="pl-12 text-white mb-2 text-lg">GAMES PLAYED</h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.games.played.home}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.games.played.away}</p>
            </li>
            <li className="list-stats">
              <p> ALL</p>
              <p>{teamStats.teamStats.games.played.all}</p>
            </li>
            <h3 className="pl-12 text-white mb-2 mt-2 text-lg">GAMES WINS</h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.games.wins.home.total}</p>
            </li>
            <li className="list-stats">
              <p> Home percentage (%)</p>
              <p>{teamStats.teamStats.games.wins.home.percentage}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.games.wins.away.total}</p>
            </li>
            <li className="list-stats">
              <p> Away percentage (%)</p>
              <p>{teamStats.teamStats.games.wins.away.percentage}</p>
            </li>
            <li className="list-stats">
              <p> All</p>
              <p>{teamStats.teamStats.games.wins.all.total}</p>
            </li>
            <li className="list-stats">
              <p> All percentage (%)</p>
              <p>{teamStats.teamStats.games.wins.all.percentage}</p>
            </li>
            <h3 className="pl-12 text-white mb-2 mt-2 text-lg">GAMES LOSES</h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.games.loses.home.total}</p>
            </li>
            <li className="list-stats">
              <p> Home percentage (%)</p>
              <p>{teamStats.teamStats.games.loses.home.percentage}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.games.loses.away.total}</p>
            </li>
            <li className="list-stats">
              <p> Away percentage (%)</p>
              <p>{teamStats.teamStats.games.loses.away.percentage}</p>
            </li>
            <li className="list-stats">
              <p> All</p>
              <p>{teamStats.teamStats.games.loses.all.total}</p>
            </li>
            <li className="list-stats">
              <p> All percentage (%)</p>
              <p>{teamStats.teamStats.games.loses.all.percentage}</p>
            </li>
            <h3 className="pl-12 text-white mb-2 text-lg">POINTS FOR TOTAL</h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.points.for.total.home}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.points.for.total.away}</p>
            </li>
            <li className="list-stats">
              <p> All</p>
              <p>{teamStats.teamStats.points.for.total.all}</p>
            </li>
            <h3 className="pl-12 text-white mb-2 text-lg">
              POINTS FOR AVERAGE
            </h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.points.for.average.home}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.points.for.average.away}</p>
            </li>
            <li className="list-stats">
              <p> All</p>
              <p>{teamStats.teamStats.points.for.average.all}</p>
            </li>
            <h3 className="pl-12 text-white mb-2 text-lg">
              POINTS AGAINST AVERAGE
            </h3>
            <li className="list-stats">
              <p> Home</p>
              <p>{teamStats.teamStats.points.against.average.home}</p>
            </li>
            <li className="list-stats">
              <p> Away</p>
              <p>{teamStats.teamStats.points.against.average.away}</p>
            </li>
            <li className="list-stats">
              <p> All</p>
              <p>{teamStats.teamStats.points.against.average.all}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamStats;
