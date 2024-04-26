//import React from "react";
import React, {useState} from "react";

function Item({ name, category }) {
  const[isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick(){
    setIsInCart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>{isInCart ? "Remove frm" : "Add to"} cart</button>
    </li>
  );
}

export default Item;
