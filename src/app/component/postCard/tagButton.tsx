import React from "react";

export default function TagButton({
  bgcolor,
  textcolor,
  text,
}: {
  bgcolor: string;
  textcolor: string;
  text: string;
}) {
  return (
    <button
      className={`${bgcolor} bg-opacity-10 ${textcolor} text-xs py-1  px-2 rounded-full`}
    >
      {text}
    </button>
  );
}
