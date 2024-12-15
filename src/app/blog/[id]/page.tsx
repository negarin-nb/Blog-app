"use client";
import Image from "next/image";
import React from "react";
import { getPost } from "@/requests/post";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Comments from "./comments";

const SinglePostPage = () => {
  const { id }: { id: string } = useParams();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getPost(id),
    queryKey: ["post"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //const post: PostType = await getPost(id);

  return (
    <div>
      <div className="space-y-2 ">
        <Image
          src={"/blogImage2.jpg"}
          alt="post"
          className="object-cover w-full"
          width={500}
          height={50}
        />
        <p className="text-sm text-[#6941C6] font-semibold">
          Olivia Rhye • 1 Jan 2023
        </p>
        <h1 className="text-[24px] font-semibold">{post.title}</h1>
        <p className="text-[#667085]">{post.body}</p>
      </div>

      <Comments id={id} />
    </div>
  );
};

export default SinglePostPage;
