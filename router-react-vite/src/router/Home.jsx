// import React from "react"
// import logo1 from '../assets/logog.svg'
import './Home.css'
// import logo1 from '../assets/bg-img1.svg'
import {Link} from "react-router-dom"

export default function Home()
{
    
    return(
      <div className='container-fluid bg-img d-flex justify-content-center flex-column'>
        <div className='row justify-content-center'>
          <div className='col-md-7 d-flex flex-column justify-content-center'>
           <h1 className='home-title'>
              You got the travel plans, we got the travel vans.
            </h1>
           
          </div>
        </div>
        <div className='row my-4  justify-content-center'>
          <div className='col-md-7'>
          <p className='home-subs'>
            Add adventure to your life by joining the #vanlife movement.
            </p>
            <p className='home-subs'>
            Rent the perfect van to make your perfect road trip.
            </p>
          </div>
        </div>
        <div className='row my-2  justify-content-center'>
          <div className='col-md-7 text-center'>
          <Link  to="/vans"><button className='Home-btn'>Find your Van</button></Link>
         
          </div>
        </div>

      </div>
    )
   
}