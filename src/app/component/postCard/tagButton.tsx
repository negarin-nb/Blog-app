import React from "react";

export default function TagButton({
  bgcolor,
  text,
}: {
  bgcolor: string;
  text: string;
}) {
  return (
    <button
      className={`bg-[${bgcolor}] bg-opacity-10 text-[${bgcolor}] text-xs py-1  px-2 rounded-full`}
    >
      {text}
    </button>
  );
}
