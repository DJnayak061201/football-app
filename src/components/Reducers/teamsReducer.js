import $ from "jquery";
const TeamsReducer = (state = [], action = {}) => {
    switch(action.type)
    {
        case "setTeams":
            return action.data;
        default:
            return state;
    }
}

export const setTeams = (league) => async (dispatch) => {
    try {
        const url = `https://api.football-data.org/v2/competitions/${league}/teams`;
      $.ajax({
        headers: { "X-Auth-Token": "9b74c6594b444d4ebb334429755f6613" },
        url: url,
        dataType: "json",
        type: "GET",
      }).done(function (response) {
        dispatch({
            type: "setTeams",
            data: response,
        })
      });
    }
    catch{
        dispatch({
            type: "setTable",
            data: { statuscode: 400 },
        })
    }
}

export default TeamsReducer;