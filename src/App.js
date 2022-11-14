import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
