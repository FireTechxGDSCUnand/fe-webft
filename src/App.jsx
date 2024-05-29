import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Hackathon from './components/section/Hackathon';
import SeminatIT from './components/section/SeminatIT';
import LandingPage from './LandingPage';

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/hackathon" element={<Hackathon />} />
        <Route path="/event/seminarIT" element={<SeminatIT />} />

        
      </Routes>
    </Router>
  );
}
export default App;