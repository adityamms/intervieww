"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  const { data: session } = useSession();

  return (
    <div className=" justify-center flex p-10 bg-black">
      <div className=" w-full h-screen border border-black grid bg-white">
        <div className="mt-20">
          <h2 className=" text-center text-6xl">LOGIN PAGE</h2>
        </div>
        <div>
          <form className="grid justify-center align-middle gap-10">
            <div className="gap-5 flex">
              <label>username :</label>
              <input
                placeholder="your userName/Emali"
                className=" outline-none border-b"
              ></input>
            </div>
            <div className="gap-5 flex">
              <label>Password :</label>
              <input
                placeholder="your Password"
                type="password"
                className=" outline-none border-b"
              ></input>
            </div>
            {session ? (
              <button
                className="border shadow-md shadow-black h-10"
                onClick={() => signOut()}
              >
                LOGOUT
              </button>
            ) : (
              <button
                className="border shadow-md shadow-black h-10"
                onClick={() => signIn()}
              >
                LOGIN
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
