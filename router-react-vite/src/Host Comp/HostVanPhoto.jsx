import { useOutletContext } from "react-router-dom"

export default function HostVanPhoto()
{
    const style={
        maxWidth:"140px",
        borderRadius:"10px"
    }
    const {detailsArray}=useOutletContext()
    const photo=detailsArray.map(item=>{
        return(<>
        <img style={style} src={item.imageUrl}/>
        </>)
    })
    return(<div className="container my-3">
    <div className="row">
        <div className="col-4">
            {photo}
        </div>
    </div>
    </div>)
}