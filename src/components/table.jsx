import { useEffect, useState } from "react";
import $ from "jquery";
import "./css/table.css";
const Table = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.football-data.org/v2/competitions/${props.league}/standings`;
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
  }, [props.league, props.type]);

  return (
    <div className="table">
      <div className="table-item">
        <div className="pos">Pos</div>
        <div className="team">Club</div>
        <div className="p">Pts</div>
        <div className="mp">MP</div>
        <div className="w">W</div>
        <div className="d">D</div>
        <div className="l">L</div>
      </div>
      {data &&
        data.standings[0].table.map((s, i) => {
          return (
            <div className="table-item" key={i}>
              <div className="pos">{i + 1}</div>
              <div className="team">{s.team.name}</div>
              <div className="p">{s.points}</div>
              <div className="mp">{s.playedGames}</div>
              <div className="w">{s.won}</div>
              <div className="d">{s.draw}</div>
              <div className="l">{s.lost}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Table;
