import type { Post } from "./app.types";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("http://localhost:8080/posts");

  return response.json();
};
