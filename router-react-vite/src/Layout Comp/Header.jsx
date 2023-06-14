import { NavLink } from "react-router-dom"
import logo1 from '../assets/logog.svg'

export default function Header()
{
  const activeStyle = {
    fontWeight: "bold",
    
    textDecoration: "underline",
    // color: "black"
  }
    return(<>
     <header>
        <NavLink className="site-logo" to="/">
          <img className="" src={logo1} width={"100vw"}/>
        </NavLink>
        <nav>
          <NavLink style={({isActive})=>isActive?activeStyle:null} className="host header-link" to="/host">Host</NavLink>
          <NavLink style={({isActive})=>isActive?activeStyle:null} className="about header-link" to="/about">About</NavLink>
          <NavLink style={({isActive})=>isActive?activeStyle:null} className="vans header-link" to="/vans">Vans</NavLink>
        </nav>
      </header>
    </>)
}