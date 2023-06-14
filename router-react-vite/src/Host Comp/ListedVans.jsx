import './ListedVans.css'
// import logo from "../assets/modest-explorer.png";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
// import VansComp from '../router/VansComp';
export default function ListedVans()
{
    
    
    const [vans, setVans]=useState([])
    useEffect(()=>{
      fetch('/api/host/vans')
      .then(res=>res.json())
      .then(data=>setVans(data.vans))
    },[])
    console.log(vans)
    const ListedVans=vans.map(item=>{
      return (
      <div key={item.id} className="col-md-8 my-3 vans-detail-bg ">
     
      <Link className='listed--link' to={`/host/vans/${item.id}`}> 
         <div className="row">
          <div className="col-3 px-0">
          <img className="img-fluid vans-detail-img" src={item.imageUrl} alt="" />
        </div>
        <div className="col-8 my-auto">
          {/* <div className="col-8"> */}

          <div className=" py-2 ">
            <div className="card-body py-2">
              <div className="card--body-child">
                <p className="card-title p-0">{item.name}</p>
                <p className="card-text">${item.price}/day</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
       
      </div>
       </Link>
    </div>)
    })
    
    
    
    
    return(<div className='container'>
            <div className="row m-2  vans--details">
          {vans.length>0?ListedVans:<h3>Loading...</h3>}
          

          
        </div>
    </div>)
}