import React from "react";
import { getComments } from "../../../requests/post";
import { useQuery } from "@tanstack/react-query";
import { commentType } from "../../../types";

export default function Comments({ id }: { id: string }) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getComments(id),
    queryKey: ["comments"],
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //const comments: commentType[] = await getComments(id);

  return (
    <div>
      <h2 className="text-lg font-semibold capitalize mt-12">comments</h2>
      {comments?.map((comment: commentType) => (
        <div className=" py-6 border-b-2" key={comment.id}>
          <h1 className="text-md font-semibold">{comment.name}</h1>
          <p className="text-sm text-[#6941C6] font-semibold">
            {comment.email}
          </p>
          <p className="text-[#667085]">{comment.body}</p>
        </div>
      ))}{" "}
    </div>
  );
}
