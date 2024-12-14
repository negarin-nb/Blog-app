import Image from "next/image";
import React from "react";
import PostCard2 from "../postCard/postCard2";
import { PostType } from "@/types";
import Link from "next/link";
import TagButton from "../postCard/tagButton";

export default function RecentBlogPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className="pt-10">
      <h1 className="font-semibold py-8 text-xl">Recent Blog Post</h1>

      <div className="grid grid-col-1 lg:grid-cols-4 lg:grid-flow-row gap-8 ">
        <div className="lg:col-span-2 lg:row-span-2 h-auto space-y-4">
          {/* <PostCard postItem={posts[0]}/> */}
          <Image
            className="object-cover h-48 w-full"
            src={"/blogImage2.jpg"}
            alt="post"
            width={650}
            height={300}
          />
          <p className="text-sm text-[#6941C6] font-semibold py-2">
            Olivia Rhye • 1 Jan 2023
          </p>

          <Link href={`blog/${posts[0]?.id}`}>
            <div className="flex flex-row justify-between items-start ">
              <h1 className="text-[24px] font-semibold">
                {posts[0]?.title.substring(0, 50)}
              </h1>
              <img className="pt-[14px] ps-6" src="/titleIcon.svg" alt="icon" />
            </div>
          </Link>
          <p className="text-[#667085]">{posts[0]?.body.substring(0, 100)}</p>

          <div className="flex flex-row space-x-2">
            <TagButton bgcolor={"#6941C6"} text={"design"} />
            <TagButton bgcolor={"#C11574"} text={"presentation"} />
            <TagButton bgcolor={"#3538CD"} text={"research"} />
          </div>
        </div>

        <div className="lg:col-span-2 row-span-1">
          <PostCard2 postItem={posts[1]} />
        </div>
        <div className="lg:col-span-2 row-span-1">
          <PostCard2 postItem={posts[2]} />
        </div>
        <div className="lg:col-span-4 pt-6">
          <PostCard2 postItem={posts[3]} />
        </div>
      </div>
    </div>
  );
}
