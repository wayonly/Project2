import React from "react";
import './Service.css';
import Servicecart from "./Servicecart";
import Cart from "./Cart";


function Service(){

  return(
    <div>
   <header className="header">
    <h1>Laundry</h1>
    <Servicecart/>
  
   </header>
   <Cart/>
  </div>
  )
}
export default Service;

  