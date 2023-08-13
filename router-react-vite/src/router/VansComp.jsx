import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// 
import Cards from "./VansCard";
import "./VansComp.css";
import { useEffect } from "react";
export default function VansComp() {


  const [searchPara, setSearchParam]=useSearchParams()
  const [vansData, setVansData] = useState([]);

  const typeFilter=searchPara.get("type") 
   const DispElement=typeFilter? vansData.filter(item=>item.type===typeFilter):vansData

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));

    console.log("this is State", vansData);
  }, []);

  // console.log("this is State", vansData);

  const vansElements = DispElement.map((item) => {
    return (
      <Cards
        state={{ search: `?${searchPara.toString()}` }}
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price}
        type={item.type}
      />
    );
  });

  // console.log("Search Param ",searchPara)

  function handleFilterChange(key, value) {
    setSearchParam(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }


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
        <button onClick={() => handleFilterChange('type','simple')} className="fil-btn">Simple</button>
        <button onClick={() => handleFilterChange('type','luxury')} className="fil-btn">Luxury</button>
        <button onClick={() => handleFilterChange('type','rugged')} className="fil-btn">Rugged</button>
        {typeFilter?(<button onClick={() => handleFilterChange('type',null)} className="clear-btn">Clear Filter</button>)
        :null}
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
