import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShuffle } from "react-icons/md";

const ProductDetails = () => {
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease the count
  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div className="product-details">
      <div className='Ptitle'>023 - Baccarat 540</div>
      <div className='TDecs'>Insprired By: M. F. Kurkjian Baccarat Rouge 540  (Retail Price $450)</div>

      <div className="flex gap">
        <div className="numstar flex gap">
            <div className="num">4.0</div>
            <div className="star flex"><FaStar color="yellow" /><FaStar color="yellow" /><FaStar color="yellow" /><FaStar color="yellow" /><FaRegStar /></div>
        </div>
        <div className="rating">191 rating</div>
      </div>

      <div className="TDecs">Eau de Parfum Spray For Men & Women</div>

      <div className="TDecs">Vegan | Cruelty-free | IRFA Compliant | Clean & Safe ingredients</div>
      <div className="PSub">Subscription</div>
      <div className="flex">
        <div className="Pimg"><img src="/Asset1.png" alt="Product" className="main-image" /></div>
        <div className="Pprice">$25.99 / 1.7 fl oz</div>
        <div className="starSub"><div>START SUBSCRIPTION</div></div>
      </div>
      <hr />
      <div className="otp">One-time Purchase</div>
      <div className="flex gap">
        <div className="ps">SIZE :</div>
        <div className="ps">1.7 Fl Oz / 50ml</div>
      </div>
      <div className="dSize">
        <div className="dps">0.14 Fl Oz</div>
        <div className="dps">0.27 Fl Oz</div>
        <div className="dps">0.33 Fl Oz</div>
        <div className="dps">1.4 Fl Oz</div>
        <div className="dps">3.4 Fl Oz</div>
      </div>

      <div className='Price'>$29.99</div>

      <div className="flex gap">
        <div className="counter">
          <div className='countSign' onClick={decrement}>-</div >
          <span>{count}</span>
          <div className='countSign' onClick={increment}>+</div >
        </div>

        <div className="CART">ADD TO CART</div>
        <div className="heart"> <FaRegHeart  color="#A02251" size={30} className="heart1"/></div>
        <div className="heart"><MdOutlineShuffle color="#A02251" size={30} className="heart1"/></div>
      </div>

      <div className="bankCard">
        <img src="/bankCard.png" alt="" />
      </div>
      
    </div>
  );
};

export default ProductDetails;
