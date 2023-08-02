import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from './components/teams/Teams';
import TeamStats from './components/teamStats/TeamStats';
import Nabar from './components/Navbar/Nabar';

function App() {
  return (
    <div className="bg-sky-700 px-0 min-h-screen">
      <Router>
        <Nabar />
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/:teamId/statistics" element={<TeamStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
