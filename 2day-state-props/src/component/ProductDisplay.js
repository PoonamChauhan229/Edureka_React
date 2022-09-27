import React from "react";
import "./ProductDisplay.css";
export default function ProductDisplay(props) {
  console.log(props);
  return (
    <div className="main">
    {
       props.prodData.map((item)=>(
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Rs. {item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
       ))
}
    </div>
  )
}
