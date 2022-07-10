import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";

function App() {

  const [league, setLeague] = useState("PL");

  const handleLeague = (l) => {
    setLeague(l);
  }
  return (
    <Provider store = {store}>
      <Sidebar handleLeague = {handleLeague}/>
      <Dashboard league = {league} />
    </Provider>
  );
}

export default App;
