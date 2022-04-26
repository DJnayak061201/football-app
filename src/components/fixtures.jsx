import { useEffect, useState } from "react";
import $ from "jquery";

import FixtureCard from "./fixtureCard";
import "./css/fixtures.css";

const Fixtures = (props) => {
  const [data, setData] = useState(null);
  const [cmd, setCmd] = useState(1); //cmd = current match day
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.football-data.org/v2/competitions/${props.league}/matches`;
      $.ajax({
        headers: { "X-Auth-Token": "9b74c6594b444d4ebb334429755f6613" },
        url: url,
        dataType: "json",
        type: "GET",
      }).done(function (response) {
        setData(response);
        setCmd(response.matches[0].season.currentMatchday);
      });
    };

    fetchApi();
  }, [props.league]);


  useEffect(()=>{
    if(data != null)
      setFiltered(data.matches.filter(f=>f.matchday === cmd));
  },[cmd, data])

  const showData = () => {
    console.log(filtered);
  }

  return (
    <div className = "fContainer">
      <div>Matchday {cmd}</div>
      <button onClick={showData}>Show</button>
      <div className="fCardContainer">
        {filtered && filtered.map((f,i) => {
          return(
            <FixtureCard key = {i} match = {f}/>
          );
        })}
      </div>
    </div>
  );
};

export default Fixtures;
