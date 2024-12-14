import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../../types";
import TagButton from "./tagButton";

export default function PostCard({ postItem }: { postItem: PostType }) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col space-y-2 w-full">
        <Image
          src={"/blogImage.jpg"}
          alt="post"
          className="object-cover w-full"
          width={100}
          height={50}
        />

        <p className="text-sm text-[#6941C6] font-semibold pt-4">
          Olivia Rhye • 1 Jan 2023
        </p>

        <Link href={`blog/${postItem.id}`}>
          <div className="flex flex-row justify-between items-start ">
            <h1 className="text-[24px] font-semibold">
              {postItem?.title.substring(0, 100)}
            </h1>
            <img className=" pt-[14px] ps-6" src="/titleIcon.svg" alt="icon" />
          </div>
        </Link>

        <p className="text-[#667085] w-full">
          Description{postItem?.body.substring(0, 100) + "..."}
        </p>
      </div>
      <div className="flex pt-4 space-x-2">
        <TagButton bgcolor={"#6941C6"} text={"design"} />
        <TagButton bgcolor={"#C11574"} text={"presentation"} />
        <TagButton bgcolor={"#3538CD"} text={"research"} />
      </div>
    </div>
  );
}
