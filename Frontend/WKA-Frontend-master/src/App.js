import './App.css';
import NaviBar from "./components/NaviBar";
import Karte from "./components/Map";
import StatisticsPage from "./components/StatisticsPage";
import InfoPage from "./components/InfoPage";
import KontaktPage from "./components/KontaktPage";
import DetailsPage from "./components/DetailsPage";
import {BrowserRouter as Router ,Switch, Route } from "react-router-dom";

function App() {

  return (
  <div>
   <Router>
    <NaviBar />
    <Switch>
    <Route path="/karte" component={Karte} />
    <Route path="/details" component={DetailsPage} />
    <Route path="/statik" component={StatisticsPage} />
    <Route path="/info" component={InfoPage} />
    <Route path="/kontakt" component={KontaktPage} />
    </Switch>
   </Router>
    </div>
  );
}

export default App;
