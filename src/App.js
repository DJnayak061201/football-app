import { useState } from "react";
import "./App.css";
import Fixtures from "./components/fixtures";
import Stats from "./components/stats";
import Table from "./components/table";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [league, setLeague] = useState("PL");
  const tabs = document.getElementsByClassName("tab");
  
  const handleClick = (button, content) => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    button.className += " active";

    let table = document.getElementById("table");
    let stats = document.getElementById("stats");
    let fixtures = document.getElementById("fixtures");

    switch(content)
    {
      case "table":
        table.style.display = "block";
        stats.style.display = "none";
        fixtures.style.display = "none";
        break;
      case "stats":
        table.style.display = "none";
        stats.style.display = "block";
        fixtures.style.display = "none";
        break;
      case "fixtures":
        table.style.display = "none";
        stats.style.display = "none";
        fixtures.style.display = "block";
        break;
      default:
        break;
    }
  };

  return (
    <Provider store = {store}>
      <div className="App">
        <div className="header">FOOTBALL APP</div>
        <form>
          <select
            className="league-list"
            value={league}
            onChange={(e) => {
              setLeague(e.target.value);
            }}
          >
            <option value="PL">Premier League</option>
            <option value="PD">La Liga</option>
            <option value="BL1">Bundesliga</option>
            <option value="SA">Serie A</option>
            <option value="FL1">Ligue 1</option>
            <option value="CL"> UEFA Champions League</option>
          </select>
        </form>
        <div className="tab-container">
          <button
            className="tab active"
            
            onClick={(e) => {
              handleClick(e.target, "table");
            }}
          >
            Points Table
          </button>
          <button
            className="tab"
           
            onClick={(e) => {
              handleClick(e.target, "fixtures");
            }}
          >
            Fixtures
          </button>
          <button
            className="tab"
            
            onClick={(e) => {
              handleClick(e.target, "stats");
            }}
          >
            Statistics
          </button>
        </div>

        <div className="content">
          <Table league={league} />
          <Fixtures league={league} />
          <Stats league={league} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
