import { useEffect, useState } from "react";
import $ from "jquery";

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
  }, [props.league]);

  const showData = () => {
    console.log(data);
  };

  return (
    <div>
      <button onClick={showData}>Show</button>
    </div>
  );
};

export default Table;
