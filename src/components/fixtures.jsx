import { useEffect, useState } from "react";
import $ from "jquery";

import FixtureCard from "./fixtureCard";
import "./css/fixtures.css";
import { useDispatch, useSelector } from "react-redux";
import { setFixtures } from "./Reducers/fixturesReducer";

const Fixtures = (props) => {
  const [data, setData] = useState(null);
  const [cmd, setCmd] = useState(1); //cmd = current match day
  const [filtered, setFiltered] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFixtures(props.league));
  }, [props.league, dispatch]);
  const { fixtures } = useSelector(store => store);
  // useEffect(() => {
  //   if(fixtures.matches !== undefined)
  //     setCmd(fixtures.matches[0].season.currentMatchDay);
  // }, [fixtures])
  
  useEffect(()=>{
    if(fixtures.matches !== undefined)
    {
      console.log(cmd);
      setFiltered(fixtures.matches.filter(f=>f.matchday === cmd));
    }
  },[fixtures,cmd])

  const showData = () => {
    console.log(filtered);
    console.log(cmd);
  }

  return (
    <div className = "fContainer" id = "fixtures" style = {{ display: 'none' }}>
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
