import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/stats.css";
import { setStats } from "./Reducers/statsReducer";
const Stats = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStats(props.league));
  }, [dispatch,props.league])

  const { stats } = useSelector(store => store);

  return (
    <div className="list" id = "stats" style = {{ display: 'none' }}>
      <div className="list-item">
        <div className="rank">Rank</div>
        <div className="name">Name</div>
        <div className="goals">Goals</div>
      </div>
      {stats.scorers !== undefined && stats.length !== 0 && 
        stats.scorers.map((s, i) => {
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
