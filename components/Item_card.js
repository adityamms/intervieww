import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "./CartContext";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function Item_card({ item }) {
  const { state, dispatch } = useCart();

  console.log(state);

  const addToCart = (obj) => {
    const payload = obj;
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id: itemId } });
  };

  return (
    <div className="flex justify-center">
      <div className="mt-10 mb-10 grid grid-cols-2 md:grid-cols-4 p-5 gap-28">
        {item &&
          item.map((obj) => {
            return (
              <div key={obj.id}>
                <div className=" w-40 h-72 justify-center mb-5 grid border border-black shadow-md shadow-black rounded-md">
                  <Link href={`/Detail?productId=${obj.id}`}>
                    <img
                      src={obj.thumbnail}
                      className="w-full h-28 border rounded-lg"
                      alt={obj.title}
                    />
                  </Link>
                  <div>
                    <Link href={`/Detail?productId=${obj.id}`}>
                      <h2 className="p-2 text-ellipsis text-sm text-left md:text-center">
                        {obj.title}
                      </h2>
                    </Link>
                    <div className="p-2 grid">
                      <p className="line-through text-red-500">${obj.price}</p>
                      <p className="text-center">
                        $
                        {(
                          obj.price -
                          (obj.price * obj.discountPercentage) / 100
                        ).toFixed(2)}
                      </p>
                      <div className="flex justify-evenly mt-2">
                        <button onClick={() => decreaseQuantity(obj.id)}>
                          <RemoveIcon className="text-lg text-center text-red-500" />
                        </button>
                        <button onClick={() => addToCart(obj)}>
                          <AddIcon className="text-lg text-center" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center"></div>
    </div>
  );
}
