"use client";

import Item_card from "@/components/Item_card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState();
  const [typing, setTyping] = useState("");

  console.log(typing);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((item) => {
      setProduct(item.data.products);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://dummyjson.com/products/search?q=${typing}`)
      .then((item) => {
        setProduct(item.data.products);
      });
  };

  return (
    <>
      <div className="flex justify-center mt-5">
        <form
          onSubmit={handleSearch}
          className="border border-black p-2 rounded-lg"
        >
          <input
            placeholder="search product"
            onChange={(e) => {
              setTyping(e.target.value);
            }}
            className="outline-none"
          ></input>
        </form>
      </div>
      <Item_card item={product && product} />
    </>
  );
}
