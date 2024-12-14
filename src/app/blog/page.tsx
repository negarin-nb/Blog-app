"use client";
import React from "react";
import PostCard from "../component/postCard/postCard";
import AllBlogPosts from "../component/postList/allPosts";
import { getPosts } from "../../requests/post";
import { useQuery } from "@tanstack/react-query";

export const BlogPage = () => {
  //let posts: PostType[] = await getPosts();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <AllBlogPosts posts={posts} />;
};

export default BlogPage;
