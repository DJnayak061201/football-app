import { useState } from "react";
import "./App.css";
import Fixtures from "./components/fixtures";
import Stats from "./components/stats";
import Table from "./components/table";

function App() {
  const [content, setContent] = useState("table");
  const [league, setLeague] = useState("PL");
  const tabs = document.getElementsByClassName("tab");

  const handleClick = (button) => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    button.className += " active";
  };

  const handleContent = () => {
    switch (content) {
      case "table":
        return <Table league={league} />;
      case "fixtures":
        return <Fixtures league={league} />;
      case "stats":
        return <Stats league={league} />;
      default:
    }
  };
  
  return (
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
          id="table"
          onClick={(e) => {
            handleClick(e.target);
            setContent("table");
          }}
        >
          Points Table
        </button>
        <button
          className="tab"
          id="fixtures"
          onClick={(e) => {
            handleClick(e.target);
            setContent("fixtures");
          }}
        >
          Fixtures
        </button>
        <button
          className="tab"
          id="stats"
          onClick={(e) => {
            handleClick(e.target);
            setContent("stats");
          }}
        >
          Statistics
        </button>
      </div>

      <div className="content">{handleContent()}</div>
    </div>
  );
}

export default App;
