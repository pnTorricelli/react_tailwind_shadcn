

import PostList from "./components/PostList"
import { useEffect, useState } from "react";
import { LogoSpinner } from "./components/ui/spinner";

export interface Post {
  id: number,
  author: string,
  body: string,
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { console.log("Posts updated:", posts) }, [posts])


  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/posts");
        console.log("Response status:", response.status);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }

    }
    fetchPosts();
  }, [])




  return (<>
    {loading && <div className="flex items-center justify-center  w-full  mt-10"><LogoSpinner className="size-8" /></div>}
    {!loading && error && <div className="text-center text-red-500 mt-10">Error: {error}</div>}
    {!loading && !error && posts.length === 0 && <div className="text-center text-gray-500 mt-10">No posts yet. Create one!</div>}
    {!loading && !error && posts.length > 0 && <PostList posts={posts} />}
  </>
  )
}