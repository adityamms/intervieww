"use client";
import React from "react";
import { useSession } from "next-auth/react";
export default function page() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div className="text-center bg-green-500">
          You are login you can see the content now
        </div>
      ) : (
        <div className="bg-red-500 text-center">PROTECTED CONTENT</div>
      )}
    </div>
  );
}
