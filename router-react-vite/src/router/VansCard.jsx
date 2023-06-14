


import {Link} from "react-router-dom"
export default function Cards(props)
{
    const style={
        backgroundColor:props.type==="simple"?"#E17654":
                        props.type==='luxury'?"#161616":
                        props.type==='rugged'?"#115E59":"none"
    }
        return(<div className='img--container col-md-4 mx-2 my-3 border'>
        <Link className="card--link" to={`/vans/${props.id}`}>
        <img className='card--image' src={props.imageUrl}/>
        
        <div className='card--position'>
        <div className='card--desc'>
            <div className="h1-pos">
            <h6 className='card--title'>{props.name}</h6>
            <p style={style} className='prod-tag'>{props.type}</p>
            </div>
            <p className='pricing'><span className='price--1'>${props.price}</span><span>/day</span></p>
        
        </div>
        
        </div>
        </Link>
    </div>)
}