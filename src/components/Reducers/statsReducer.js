import $ from "jquery";
const StatsReducer = (state = [], action = {}) => {
    switch(action.type)
    {
        case "set":
            return action.data;
        default:
            return state;
    }
}

export const setStats = (league) => async (dispatch) => {
    try {
        const url = `https://api.football-data.org/v2/competitions/${league}/scorers`;
      $.ajax({
        headers: { "X-Auth-Token": "9b74c6594b444d4ebb334429755f6613" },
        url: url,
        dataType: "json",
        type: "GET",
      }).done(function (response) {
        dispatch({
            type: "set",
            data: response,
        })
      });
    }
    catch {
        dispatch({
            type: "set",
            data: { statuscode: 400 },
        })
    }
}

export default StatsReducer;