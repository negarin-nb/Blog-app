import React, { useState } from "react";
import PostCard from "../postCard/postCard";
import { PostType } from "../../../types";
import SearchBar from "../searchBar";

export const AllBlogPosts = ({ posts }: { posts: PostType[] }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerQuery)
    );
    setFilteredPosts(results);
  };

  return (
    <div className="pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="py-8 font-semibold text-xl">All Blog Post</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} postItem={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogPosts;
