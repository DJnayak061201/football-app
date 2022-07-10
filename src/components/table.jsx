import { useEffect } from "react";
import "./css/table.css";
import { useDispatch, useSelector } from "react-redux";
import { setTable } from "./Reducers/tableReducer";
import Crest from "./crest";
const Table = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTable(props.league));
  }, [props.league, dispatch]);

  const { table } = useSelector(store => store);

  return (
    <div className="table" id = "table">
      <div className="table-item">
        <div className="pos">Pos</div>
        <div className="team">Club</div>
        <div className="p">Pts</div>
        <div className="mp">MP</div>
        <div className="w">W</div>
        <div className="d">D</div>
        <div className="l">L</div>
      </div>
      {table.standings !== undefined && table.length !== 0 ? 
        table.standings[0].table.map((s, i) => {
          return (
            <div className="table-item" key={i}>
              <div className="pos">{i + 1}</div>
              <div className="team">
                <Crest url = {s.team.crest} w = "20px" h = "20px"/>
                {s.team.shortName}
              </div>
              <div className="p">{s.points}</div>
              <div className="mp">{s.playedGames}</div>
              <div className="w">{s.won}</div>
              <div className="d">{s.draw}</div>
              <div className="l">{s.lost}</div>
            </div>
          );
        })
        :
        <div>
            Loading...
        </div>}
    </div>
  );
};

export default Table;
