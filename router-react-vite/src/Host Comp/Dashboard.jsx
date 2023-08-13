import "./Dashboard.css";
import star from "../assets/Star.svg";
import logo from "../assets/modest-explorer.png";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div className="container dashboard-font">
        <div className="row">
          <div className="dashboard--1 p-3 col-md-12">
            <h3 className="dash--title">Welcome!</h3>
            <div className="dash-subs">
              <p className="dash--days">
                Income last <span>30 days</span>
              </p>
              <Link className="dash--link" to="income">
                <button className="Details">Details</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="dashboard--2 col-md-12">
            <h2 className="dash--income">$2,260</h2>
          </div>
        </div>
        <div className="row">
          <div className="dash--review p-3 d-flex justify-content-between align-items-center col-md-12">
            <h3 className="d-flex justify-content-center align-items-center">
              Review score
              <img src={star} className="dash--review--star" />
              <span className="dash--review-rating mt-1">5.0/5</span>
            </h3>
            <Link to="reviews">
              <button className="Details">Details</button>{" "}
            </Link>
          </div>
        </div>


        <div className="row">
          <div className=" col-md-12 my-2">
            <div className="d-flex justify-content-between align-items-center">
              <h4>Your Listed Vans</h4>
              <Link to="vans">
              <button className="Details">View All</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-2 dash--van--card">
          
          <div className="col-md-8 my-3 ">
            <div className="row">
              <div className="col-3">
                <img className="card-img-top" src={logo} alt="" />
              </div>
              <div className="col-9 my-auto">
                {/* <div className="col-8"> */}

                <div className="card py-2 ">
                  <div className="card-body py-2">
                    <div className="card--body-child">
                      <p className="card-title p-0">Modest Explorer</p>
                      <p className="card-text">$80/day</p>
                    </div>
                    <button className="dash--btn-edit">Edit</button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* 2nd card  */}
          <div className="col-md-8 my-3 ">
            <div className="row">
              <div className="col-3">
                <img className="card-img-top" src={logo} alt="" />
              </div>
              <div className="col-9 my-auto">
                {/* <div className="col-8"> */}

                <div className="card py-2 ">
                  <div className="card-body py-2">
                    <div className="card--body-child">
                      <p className="card-title p-0">Modest Explorer</p>
                      <p className="card-text">$80/day</p>
                    </div>
                    <button className="dash--btn-edit">Edit</button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>



          {/* 3rd card */}
          <div className="col-md-8 my-3">
            <div className="row">
              <div className="col-3">
                <img className="card-img-top" src={logo} alt="" />
              </div>
              <div className="col-9 my-auto">
                {/* <div className="col-8"> */}

                <div className="card py-2 ">
                  <div className="card-body py-2">
                    <div className="card--body-child">
                      <p className="card-title p-0">Modest Explorer</p>
                      <p className="card-text">$80/day</p>
                    </div>
                    <button className="dash--btn-edit">Edit</button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* END */}
        </div>
      </div>
    </>
  );
}
