import "./VanListedDetail.css"
import logo from '../assets/modest-explorer.png'
import { useState,useEffect } from "react"
import { useParams, NavLink, Link, Outlet } from "react-router-dom"
import Detail from "./DetailCard"
export default function ListedVanDetail()
{
    const param=useParams()
    const [detailsArray, setDetail]=useState([])
   
const fetchData= async()=>{
  const response= await fetch(`/api/host/vans/${param.id}`)
  if(!response.ok){
    throw new Error("Data could not be found!")
  }else{
    return response.json()
  }
}   
   
    useEffect(()=>{
        fetch(`/api/host/vans/${param.id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data.vans))
        // fetchData().then((data)=>{
        //   setDetail(data)
        // })
        // .catch(e=>console.log(e.message))
    },[param.id])
    
   console.log('listed vans detail API ',detailsArray)
    const displayDetail=detailsArray.map(item=>{
        return <Detail  id={item.id}
                         key={item.id}
                         imageUrl={item.imageUrl}
                         type={item.type}
                         name={item.name}
                         price={item.price}/>
    })
    const activeStyle = {
        // fontWeight: "bold",
        textDecoration: "underline",
        // color: "black"
      }
      const unactive={
        textDecoration:"none",
      }
    return(<div className="container">
        <div className="row">
            <div className="col-md-12">
                <Link to='/host/vans'>
              <button className="back-to-vans-detail">&#8592; Back to all vans</button>
                </Link>
            </div>
        </div>
   {detailsArray.length>=0? displayDetail:(<h3>Loading...</h3>)} 
   <nav>
    <NavLink 
    style={({isActive})=>isActive?activeStyle:unactive}
    end
    to='.'>
    Description
    </NavLink>

    <NavLink
    style={({isActive})=>isActive?activeStyle:unactive} 
    to='pricing'>
    Price
    </NavLink>
    
    <NavLink 
    style={({isActive})=>isActive?activeStyle:unactive}
    to='photos'>
    Photo
    </NavLink>

    </nav>    
   <Outlet context={{detailsArray}}/>
   
    </div>)
}