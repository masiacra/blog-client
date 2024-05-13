import { useEffect, useState } from "react";
import type { Post } from "./app.types";
import { getPosts } from "./app.helpers";

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <main>
      <h1>Masiacras blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>{post.author}</div>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
    </main>
  );
};
