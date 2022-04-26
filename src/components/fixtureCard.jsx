import { useEffect } from 'react';
import $ from 'jquery';
const FixtureCard = (props) => {
  const crestUrls = [];

  // useEffect(() => {
  //   const fetchApi = async (id, i) => {
  //     const url = `https://api.football-data.org/v2/teams/${id}`;
  //     $.ajax({
  //       headers: { 'X-Auth-Token': '9b74c6594b444d4ebb334429755f6613' },
  //       url: url,
  //       dataType: 'json',
  //       type: 'GET',
  //     }).done(function (response) {
  //       console.log(response);
  //     });
  //   };

  //   fetchApi(props.match.homeTeam.id, 0);
  //   fetchApi(props.match.awayTeam.id, 1);
  // }, [props.match, crestUrls]);
  return (
    <div className="fCard">
      <div className="date">{props.match.utcDate}</div>
      <div className="fixture">
        <div className="fTeam">
          <img src={crestUrls[0]} alt="" />
          {props.match.awayTeam.name}
        </div>
        <div>
          <img src={crestUrls[1]} alt="" />
          {props.match.status}
        </div>
        <div className="fTeam">{props.match.homeTeam.name}</div>
      </div>
    </div>
  );
};

export default FixtureCard;
