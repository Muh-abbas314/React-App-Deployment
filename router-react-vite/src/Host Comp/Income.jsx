import "./Income.css"
import chart from '../assets/chart.png'
export default function Income()
{
    return(<>
    <div className="container">
        <div className="row my-3">
            <div className="col-md-12">
                <h3 className="income--font">Income</h3>
                <p>Last <span  className="income--days">30 days</span></p>
                <h2 className="income--font">$2,260</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 
            d-flex justify-content-center align-items-center
             
            img-fluid">
                <img className="chart--img" src={chart}/>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
                <h4 className="trans--font">Your transaction (3)</h4>
                <p>Last <span className="income--days">30 days</span></p>
            </div>
        </div>


        <div className="container">
        <div className="row  trans-scroll">
            <div className="col-md-12">
                <div className="cash--data d-flex justify-content-between align-items-center border">
                    <h3>$720</h3>
                    <p>10/06/23</p>
                </div>
            </div>
            {/* **************** */}
            <div className="col-md-12">
                <div className="cash--data d-flex justify-content-between align-items-center border">
                    <h3>$720</h3>
                    <p>10/06/23</p>
                </div>
            </div>
           
        </div>
        </div>
    </div>
    </>)
}