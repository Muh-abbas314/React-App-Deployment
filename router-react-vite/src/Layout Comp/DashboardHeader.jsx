import "./dashBoard.css"

import {NavLink} from "react-router-dom"
export default function DashHeader()
{
    const activeStyle = {
        // fontWeight: "bold",
        textDecoration: "underline",
        // color: "black"
      }
      const unactive={
        textDecoration:"none",
      }
    return(<>
    <header className="dashboard-nav  container">
        <div className="row ">
            <div className="col-md-12  ">
            <NavLink style={({isActive})=>isActive?activeStyle:unactive} end className="host--link" to='/host'>Dashboard</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyle:unactive} className="host--link" to='/host/income'>Income</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyle:unactive} className="host--link" to='/host/vans'>Vans</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyle:unactive} className="host--link" to='/host/reviews'>Review</NavLink>
        {/* <Link className="host--link" to='/host/vans'>Dashboard</Link> */}
        
            </div>
        </div>
        
    </header>
    </>)
}


