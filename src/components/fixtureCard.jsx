import Crest from './crest';
const FixtureCard = (props) => {
  const crestUrls = [];
  return (
    <div className="fCard">
      <div className="fixture">
        <div className="fTeam">
          <Crest url = {props.match.awayTeam.crest} w = "50px" h = "50px"/>
          {props.match.awayTeam.tla}
        </div>
        <div>
          {props.match.status}
        </div>
        <div className="fTeam">
          <Crest url = {props.match.homeTeam.crest} w = "50px" h = "50px"/>
          {props.match.homeTeam.tla}
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
