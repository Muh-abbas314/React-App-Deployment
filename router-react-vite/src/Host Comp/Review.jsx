import "./Review.css"
import logo from '../assets/Star.svg'
import graph from '../assets/Group.svg'
export default function Review()
{
    return(<>
    <div className="container">
        <div className="row ">
            <div className="col-md-12">
                <h3 className="review--title">
                    Your reviews
                    <span className="review--sub--title mx-3"> last 30 days</span>
                </h3>
            </div>
        </div>

        <div className="row mt-3 ">
            <div className="col-md-12 ">
                <h5 className="  graph--title">5.0  <span className=""> <img src={logo}/> Overall rating</span></h5>
            </div>
        </div>

        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <img className="img-fluid graph-img" src={graph}/>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-md-12">
                <h5 className="comment--title">Reviews (2) </h5>
            </div>
        </div>

        <div className="row comment-container ">
        <div className="col-lg-6   ">
                            {/* <a className="card-link" href=""> */}
                                <div className="row d-flex flex-column ">
                                <div className="col-md-12">
                                        <h6 className="">Elliot <span className="review-cmt-date">December 1, 2022</span></h6>
                                    </div>
                                    <div className="col-lg-12 pl-0">

                                        <div className=" p-0">
                                            <div className=" p-0">
                                                
                                                
                                                <p className="border-none comment-text m-0 p-0">
                                                The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            {/* </a> */}
                        </div>
{/* ***********************************2nd comment */}

        </div>
    </div>
    </>)
}