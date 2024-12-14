import React from "react";
import Links from "./links";

export default function Footer() {
  return (
    <div className="w-full flex flex-col content-center md:flex-row space-y-2 md:space-x-8 pt-4 mt-20 mb-8 border-t-2 ">
      <span className="text-center md:py-2">© 2023</span>
      <Links />
    </div>
  );
}
