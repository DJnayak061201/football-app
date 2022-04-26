import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import TableReducer from "./components/Reducers/tableReducer";
import FixturesReducer from "./components/Reducers/fixturesReducer";
import StatsReducer from "./components/Reducers/statsReducer";

const reducer = combineReducers({
    table: TableReducer,
    fixtures: FixturesReducer,
    stats: StatsReducer,
})

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;