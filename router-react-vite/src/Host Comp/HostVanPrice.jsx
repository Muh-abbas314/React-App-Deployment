import './Host_Van_Detail_Info.css'
import { useOutletContext } from "react-router-dom"

export default function HostVanPrice()
{
    const style={  textAlign: 'justify',
        marginTop: '24px',
        marginBottom: '5px',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
    }
    const {detailsArray}=useOutletContext()
    const price=detailsArray.map(item=>{
        return(<><h4 className='my-3 host--van--price'>
            Price: <span style={style} className=''> ${item.price}</span>
            </h4></>)
    })
    // let {price}=detailsArray.price
    // console.log("price  ",price)
    // console.log("Price ",detailsArray)
    return(<div className='container'>
        <div className='row'>
            <div className='col-12'>
                {price}
            </div>
        </div>
    </div>)
}