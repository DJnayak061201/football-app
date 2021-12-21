import { useEffect, useState } from "react";
import $ from "jquery";
import "./css/stats.css";
const Stats = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.football-data.org/v2/competitions/${props.league}/scorers`;
      $.ajax({
        headers: { "X-Auth-Token": "9b74c6594b444d4ebb334429755f6613" },
        url: url,
        dataType: "json",
        type: "GET",
      }).done(function (response) {
        setData(response);
      });
    };

    fetchApi();
  }, [props.league]);

  return (
    <div className="list">
      <div className="list-item">
        <div className="rank">Rank</div>
        <div className="name">Name</div>
        <div className="goals">Goals</div>
      </div>
      {data &&
        data.scorers.map((s, i) => {
          return (
            <div className="list-item" key={i}>
              <div className="rank">{i + 1}</div>
              <div className="name">{s.player.name}</div>
              <div className="goals">{s.numberOfGoals}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Stats;
