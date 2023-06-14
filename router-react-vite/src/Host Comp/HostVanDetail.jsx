import './Host_Van_Detail_Info.css'

import { useOutletContext } from "react-router-dom"

export default function HostVanDetail()
{
    const {detailsArray}=useOutletContext()
    const details=detailsArray.map(item=>{
        return(<div key={item.id}>
        <h4>Name:<span> {item.name}</span></h4>
        <h4>Category: <span> {item.type}</span></h4>
        <h4>Description: <span> {item.description}</span></h4>
        <h4>Visiblity:<span> public</span></h4>
        </div>)
    })
    // console.log('context array ',detailsArray[0].name)
    return(<div className="container m-2 host--van--detail--info">
       <div className='row'>
        <div className='col-md-6 '>
             {details}
        </div>
        </div>

    </div>)
}