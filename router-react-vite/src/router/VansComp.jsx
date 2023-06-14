import { useState } from "react";
import { Link } from "react-router-dom";
// 
import Cards from "./VansCard";
import "./VansComp.css";
import { useEffect } from "react";
export default function VansComp() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));

    console.log("this is State", vansData);
  }, []);

  console.log("this is State", vansData);

  const vansElements = vansData.map((item) => {
    return (
      <Cards
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price}
        type={item.type}
      />
    );
  });

  return <div className="container  ">
    <div className="row my-3 text-center "> 
    <nav className="container ">
      <div className="row">
        <div className="col-md-6  ">
        <h2 className="filter-title text-center">Explore our van options</h2>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6 p-0">
        <div className="filter--btns ">
        <button className="fil-btn">Simple</button>
        <button className="fil-btn">Luxury</button>
        <button className="fil-btn">Rugged</button>
        <button className="clear-btn">Clear Filter</button>
      </div>
        </div>
      </div>
    </nav>  
    <div className="col-12 my-3 ">
    {vansElements}
    </div>
    
    </div>
    </div>;

}
