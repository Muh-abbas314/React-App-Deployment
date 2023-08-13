import './VanDetail.css'
import {useParams, Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
// import logo1 from '../assets/modest-explorer.png'
export default function VanDetail()
{
 const [vanDetailCard,setVanDetail]=useState([])
 const params = useParams()
 const location=useLocation()

    console.log(params)
    console.log("Location ",location)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVanDetail(data.vans))
    },[params.id])

    console.log("state updated details ",vanDetailCard)
   
    const style={
        backgroundColor:vanDetailCard.type==="simple"?"#E17654":
                        vanDetailCard.type==='luxury'?"#161616":
                        vanDetailCard.type==='rugged'?"#115E59":"none"
    }
    const search = location.state?.search || ""
    return(<>
    <Link to={`..${search}`}  relative="path" className='back--to--vans--btn--link'><button className='back--to--vans--btn'>&#8592; Back to all vans</button></Link>
    
    {vanDetailCard.length!==0?(<div className='details-parent container-lg   my-5 '>
    <div className='d-flex flex-column  justify-content-center align-items-center'>

    <div className='row'>
     <div className='col-md-4 '>
     <div className='detail--img-container'>
     <img className=' img-fluid  van--detail--img' src={vanDetailCard.imageUrl}/>
     </div>
     </div>
     <div className='col-sm-7  my-4 van--detail-container '>
     <p style={style} className='van--detail--tag'>{vanDetailCard.type}</p>
     <h1 className='van--detail-title'>{vanDetailCard.name}</h1>
     <p className='van--detail--prices--container'>
         <span className='van--detail--price'>${vanDetailCard.price}</span>/day
     </p>
     <div className='row  d-flex justify-content-center alignitems-center flex-column'>
         <div className='col-xxl-10 '>
         <p className='van--detail--desc p-1'>{vanDetailCard.description}</p>
         </div>
         <div className='col-xxl-10'>
            <Link className='rent--link'> <button className='van--book--btn'>Rent this van</button></Link>
         </div>
     </div>
     </div>
    </div>
    
    </div>
 </div>):<h2>Data is loading</h2>}
    </>)
}