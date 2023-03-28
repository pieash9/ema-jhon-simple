import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity=0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity +product.quantity
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  // const {cart} = props
  return (
    <div className="cart">
      <h2>product summary</h2>
      <p>Selected items: {quantity}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Total shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
