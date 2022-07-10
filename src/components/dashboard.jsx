import Fixtures from "./fixtures";
import Table from "./table";
import Stats from "./stats";
const Dashboard = (props) => {
    return ( 
        <div style = {{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "50px",
        }}>
            <Table league = {props.league}/>
            <Fixtures league = {props.league}/>
            <Stats league = {props.league}/>
        </div>
     );
}
 
export default Dashboard;