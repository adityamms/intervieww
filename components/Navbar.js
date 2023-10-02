"use client";
import React, { useState } from "react";
import Link from "next/link";
import Drawer from "@mui/joy/Drawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./CartContext";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const { state, dispatch } = useCart();
  const [drawopen, setDrawopen] = useState(false);
  console.log("session nya", session);
  return (
    <div className="bg-slate-800 h-20">
      <ul className=" hidden md:flex gap-5 justify-between pr-10 align-middle self-center items-center text-white p-10">
        <Link href="/" className="relative bottom-5">
          THESHOP
        </Link>
        <div className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/About"}>About</Link>
          <Link href={"/Contact"}>Contact</Link>
          <Link href={"/Dashboard"}>Dashboard</Link>
          <Link href={"/Cart"} className="flex gap-2">
            Cart
            {state && <p className=" text-red-500">{state.cartItems.length}</p>}
          </Link>
          <Link href={"/Login"}>{session ? "LOGOUT" : "LOGIN"}</Link>
          {session && (
            <img
              src={session.user.image}
              className=" w-16 h-16 rounded-full relative bottom-8"
            />
          )}
        </div>
      </ul>
      <div className="flex justify-center align-middle h-full gap-10 md:hidden">
        <button
          onClick={() => {
            setDrawopen(true);
          }}
          className=" text-center text-white"
        >
          <MenuOpenIcon />
        </button>
        <div className="flex justify-center align-middle">
          <ShoppingCartIcon className=" text-center align-middle self-center text-white" />
          <p className="text-center align-middle self-center text-red-500">
            {state && state.cartItems.length}
          </p>
        </div>
      </div>
      <Drawer
        anchor="right"
        size="sm"
        variant="soft"
        open={drawopen}
        onClose={() => setDrawopen(false)}
      >
        <div className="grid gap-10 relative top-1/3 justify-center align-middle">
          <Link href={"/"} className=" hover:text-green-500">
            Home
          </Link>
          <Link href={"/About"} className=" hover:text-green-500">
            About
          </Link>
          <Link href={"/Contact"} className=" hover:text-green-500">
            Contact
          </Link>

          <Link href={"/Cart"} className=" hover:text-green-500">
            Cart
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
