import React from "react";
interface Props {
  cartItems: string[];
}
const ShoppingCart = ({ cartItems }: Props) => {
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingCart;
