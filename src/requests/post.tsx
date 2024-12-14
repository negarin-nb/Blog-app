export const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=14"
  );
  if (!res.ok) {
    throw new Error("Somthing is Wrong!");
  }
  return res.json();
};

export const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Somthing is Wrong!");
  }
  return res.json();
};

export const getComments = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!res.ok) {
    throw new Error("Somthing is Wrong!");
  }
  return res.json();
};
