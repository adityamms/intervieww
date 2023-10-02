"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function page() {
  let [data, setData] = useState("");
  let [preview, setPreview] = useState();
  const searchParams = useSearchParams();
  const params = searchParams.get("productId");
  console.log(data);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params}`).then((item) => {
      setData(item.data);
    });
  }, []);

  return (
    <div className=" grid">
      <div>
        <img src={preview || data.thumbnail} className=" w-full h-40 mt-20" />
        <div className="grid grid-cols-3 md:flex justify-center align-middle gap-5 mt-20 mb-20 p-2">
          {data &&
            data.images.map((item) => {
              return (
                <div className="border border-black rounded-lg shadow shadow-black">
                  <img
                    src={item}
                    className=" w-36 h-36 rounded-lg"
                    onClick={() => setPreview(item)}
                  />{" "}
                </div>
              );
            })}
        </div>
        <div className="grid p-10 gap-5">
          <h2 className=" text-lg">{data.title}</h2>
          <div className="flex gap-2">
            <h2 className=" line-through text-red-500">
              Price : ${data.price}
            </h2>
            <h2>
              $
              {(
                data.price -
                (data.price * data.discountPercentage) / 100
              ).toFixed(2)}
            </h2>
          </div>
          <h2>brand : {data.brand}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
