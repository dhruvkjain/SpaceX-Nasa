import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Launch from "./components/Launch";
import History from "./components/History";
import Upcoming from './components/Upcoming';
import usePlanets from './components/hooks/usePlanets';
import useLaunches from './components/hooks/useLaunches';

function App() {

  const { 
    planets
  } = usePlanets();

  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches();

  return (
    <div className="dotsbg bg-black min-h-[100vh]">
      <Router>
        <Header />
        <Routes>
            <Route index
              element = {<Home />}
            />
            <Route path="launch" 
                    element={
                      <Launch
                        planets={planets}
                        submitLaunch={submitLaunch}
                        isPendingLaunch={isPendingLaunch}
                      />} />
            <Route path="history" element={<History launches={launches}/>} />
            <Route path="upcoming" element={<Upcoming launches={launches} abortLaunch={abortLaunch}/>} />
            <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
