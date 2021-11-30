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
      {data &&
        data.scorers.map((s, i) => {
          return (
            <div className="list-item" key={i}>
              <div>{i + 1}</div>
              <div>{s.player.name}</div>
              <div>{s.numberOfGoals}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Stats;
