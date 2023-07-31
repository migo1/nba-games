import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from './components/teams/Teams';
import TeamStats from './components/teamStats/TeamStats';

function App() {
  return (
    <div className="bg-sky-700 px-12 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/:teamId/statistics" element={<TeamStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
