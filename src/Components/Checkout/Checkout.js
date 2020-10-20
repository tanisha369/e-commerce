import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import {useStateValue} from "../Reducer/StateProvider";

function Checkout() {
  const [{basket, user}] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

            ></CheckoutProduct>
            
          ))}
        </div>
        
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
        
      </div>
    </div>
  );
}

export default Checkout;
