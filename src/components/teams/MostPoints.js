import React from 'react';
import PropTypes from 'prop-types';

function MostPoints({ teamWithMostPoints }) {
  return (
    <div className="bg-sky-600 px-12 py-3 flex justify-between">
      <img
        src={teamWithMostPoints.team.logo}
        alt={teamWithMostPoints.team.name}
      />
      <div className="flex flex-col">
        <p className="text-white text-3xl font-semibold">
          Team With Highest Buckets
        </p>
        <div className="mt-auto text-right">
          <h3 className="text-white text-4xl font-semibold">
            {teamWithMostPoints.team.name}
          </h3>
          <p className="text-2xl font-semibold text-white">
            Buckets :
            {teamWithMostPoints.points.for}
          </p>
        </div>
      </div>
    </div>
  );
}

MostPoints.propTypes = {
  teamWithMostPoints: PropTypes.shape({
    team: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    points: PropTypes.shape({
      for: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MostPoints;
