import './Host_Van_detail_Info.css'
export default function Detail (props)
{ const style={
    backgroundColor:props.type==="simple"?"#E17654":
                    props.type==='luxury'?"#161616":
                    props.type==='rugged'?"#115E59":"none"
}
    return(<div  className="row">
    <div  className="col-md-10 my-3 mx-auto vans-detail-bg ">
      
      {/* <Link className='listed--link' to={`/host/vans/${item.id}`}>  */}
         <div className="row">
          <div className="col-5  px-0">
          <img className=" img-fluid vans-detail-img" src={props.imageUrl} alt="" />
        </div>
        <div className="col-7  px-1 my-auto">
          {/* <div className="col-8"> */}
 
          {/* <div className="  "> */}
            <div className="card-body mx-3 py-2">
              <div className="card--body-child">
                 <p  style={style} className="details--tag m-0">{props.type}</p>
                <p className="details--title p-0 m-0">{props.name}</p>
                <p className="card-text "><span className=" details--price"> ${props.price}</span> /day</p>
              </div>
            </div>
          {/* </div> */}
          {/* </div> */}
        </div>
       
      </div>
       {/* </Link> */}
    </div>
        
       </div>)
}