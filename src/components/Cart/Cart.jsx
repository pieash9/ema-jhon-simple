import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  // const {cart} = props
  return (
    <div className="cart">
      <h2>product summary</h2>
      <p>Selected items: {cart.length}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Total shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
