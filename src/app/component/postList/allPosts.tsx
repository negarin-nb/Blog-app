import React from "react";
import PostCard from "../postCard/postCard";
import { PostType } from "../../../types";

export const AllBlogPosts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="pt-10">
      <h1 className="py-8 font-semibold text-xl">All Blog Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} postItem={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogPosts;
