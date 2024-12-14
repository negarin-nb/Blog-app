import React from "react";
import Links from "./links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex py-6 ">
      <Link className="w-1/2 font-bold" href={"/"}>
        Blog App
      </Link>

      <div className="w-1/2 hidden md:flex justify-end space-x-8 ">
        <Links />
      </div>
    </div>
  );
}
