"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

export default function page() {
  const { state, dispatch } = useCart();
  console.log(state.cartItems);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    state.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2); // Ensure the total price is formatted to 2 decimal places
  };

  return (
    <>
      <div className="grid justify-center mt-20 mb-20 gap-10">
        {state &&
          state.cartItems.map((item) => {
            return (
              <>
                <div className="flex gap-10">
                  <img src={item.thumbnail} className=" w-40 h-20" />
                  <div className="grid">
                    <p className="">{item.title}</p>
                    <p className="">
                      ${item.price} x {item.quantity} = $
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <p className="text-center mb-20"> TOTAL : ${calculateTotalPrice()}</p>
    </>
  );
}
