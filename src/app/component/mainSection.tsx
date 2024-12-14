"use client";
import React from "react";
import RecentBlogPosts from "./postList/recentPosts";
import AllBlogPosts from "./postList/allPosts";
import { getPosts } from "@/requests/post";
import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/types";

export default function MainSection() {
  const {
    data: queryPosts,
    isLoading,
    error,
  } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });

  const recentPosts: PostType[] = [...queryPosts].slice(0, 4);
  const allPosts: PostType[] = [...queryPosts].slice(4);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="py-4">
      <h1 className="font-black uppercase text-center text-[70px] md:text-[150px] lg:text-[200px] border-y-2">
        the blog
      </h1>
      <RecentBlogPosts posts={recentPosts} />
      <AllBlogPosts posts={allPosts} />
    </div>
  );
}
