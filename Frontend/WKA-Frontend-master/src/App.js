import './App.css';
import NaviBar from "./components/NaviBar";
import "./components/Map";
import StatisticsPage from "./components/StatisticsPage";
import InfoPage from "./components/InfoPage";
import KontaktPage from "./components/KontaktPage";
import SortierPanel from "./components/SortierPanel";
import {BrowserRouter as Router ,Switch ,Route } from "react-router-dom";



function App() {
  return (
  <div>
   <Router>
    <NaviBar />
    <Switch>
    <Route path="/karte"><SortierPanel/></Route> 
    <Route path="/statistik" component={StatisticsPage} />
    <Route path="/info" component={InfoPage} />
    <Route path="/kontakt" component={KontaktPage} />
    </Switch>
   </Router>
    </div>
  );
}

export default App;
