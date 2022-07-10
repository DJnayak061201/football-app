import { useEffect, useState } from "react";
import FixtureCard from "./fixtureCard";
import "./css/fixtures.css";
import { useDispatch, useSelector } from "react-redux";
import { setFixtures } from "./Reducers/fixturesReducer";

const Fixtures = (props) => {
  const [cmd, setCmd] = useState(1); //cmd = current match day
  const [filtered, setFiltered] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFixtures(props.league));
  }, [props.league, dispatch]);
  const { fixtures } = useSelector(store => store);

  useEffect(()=>{
    if(fixtures.matches !== undefined)
    {
      const md = fixtures.matches[0].season.currentMatchday;
      setCmd(md);
      setFiltered(fixtures.matches.filter(f=>f.matchday === cmd));
    }
  },[fixtures,cmd])

  return (
    <div className = "fContainer" id = "fixtures">
      <div>Matchday {cmd}</div>
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
