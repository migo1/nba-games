import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faMicrophoneAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

function Nabar() {
  return (
    <div className="flex justify-between bg-sky-950 text-xl text-white px-12 py-3">
      <FontAwesomeIcon icon={faChevronLeft} />
      <div>
        <FontAwesomeIcon icon={faMicrophoneAlt} className="mr-12" />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
}

export default Nabar;
