import "./css/sidebar.css";
const Sidebar = (props) => {
    return ( 
        <div className="sidebar">
            <div className="sidebar_item">
                <button onClick={() => {props.handleLeague("PL")}}>Premier League</button>
            </div>
            <div className="sidebar_item">
                <button onClick={() => {props.handleLeague("PD")}}>La Liga Santander</button>
            </div>
            <div className="sidebar_item">
                <button onClick={() => {props.handleLeague("BL1")}}>Bundesliga</button>
            </div>
            <div className="sidebar_item">
                <button onClick={() => {props.handleLeague("SA")}}>Serie A</button>
            </div>
            <div className="sidebar_item">
                <button onClick={() => {props.handleLeague("FL1")}}>Ligue 1</button>
            </div>
        </div>
     );
}
 
export default Sidebar;