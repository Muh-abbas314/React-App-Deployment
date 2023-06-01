import logo2 from '../assets/image55.png'
import './About.css'
import {Link} from 'react-router-dom'
export default function About()
{
    return(<div className='about-container container-fluid'>
        <div className="row">
        <div className='col-12 fix'>
        <img className='img-fluid' src={logo2}/>
        </div>
        </div>
        <div className='row about-subs-1 justify-content-center'>
            <div className='col-md-11  '>
                <h1 className='about-title'>Don't Squeeze in a sedan when you could relax in a van </h1>
            </div>
        </div>
        <div className='row about-sub-2 justify-content-center'>
            <div className="col-md-11">
            <p className='about-summary-1'>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            <p>
            (Hitch costs extra 😉)
            </p>
             <p className='mt-4'>
             Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
             </p>
            </p> 
            </div>
        </div>
        <div className='row about-sub-3 justify-content-center'>
            <div className='col-md-8 about-sub-3-column'>
                <h1 className='about-btn-summary'>
                    Your destination is waiting. <br></br>
                    Your Van is ready
                </h1>
                <div className='col-md-4 '>
                <Link className='explore-link' to="vans"><button className='btn-explore'>Explore our vans</button></Link>
                </div>
            </div>
            
        </div>
    </div>)
}