import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../../types";
import TagButton from "./tagButton";

//{ postItem }: { postItem: PostType }
export default function PostCard2({ postItem }: { postItem: PostType }) {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2 h-auto">
        <Image
          src={"/blogImage3.jpg"}
          alt="post"
          className="object-cover h-48 w-full"
          width={300}
          height={100}
        />
      </div>

      <div className="md:w-1/2 space-y-2 flex flex-col justify-between">
        <div>
          <p className="text-sm text-[#6941C6] font-semibold pb-2">
            Olivia Rhye • 1 Jan 2023
          </p>
          <Link href={`blog/${postItem.id}`}>
            <div className="flex flex-row justify-between items-start ">
              <h1 className="text-[24px] font-semibold">
                {postItem?.title.substring(0, 20)}
              </h1>
              <Image
                className=" pt-[14px] ps-6"
                src="/titleIcon.svg"
                alt="icon"
                width={36}
                height={36}
              />
            </div>
          </Link>
          <p className="text-[#667085]">{postItem?.body.substring(0, 100)}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <TagButton
            bgcolor={"bg-[#6941C6]"}
            textcolor={"text-[#6941C6]"}
            text={"design"}
          />
          <TagButton
            bgcolor={"bg-[#C11574]"}
            textcolor={"text-[#C11574]"}
            text={"presentation"}
          />
        </div>
      </div>
    </div>
  );
}
