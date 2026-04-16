
import { Header } from "./components/Header"
import PostList from "./components/PostList"
import { Separator } from "./components/ui/separator"
import { useState } from "react";
export interface Post {
  author: string,
  content: string,
  variantColor: string
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([{ author: "Maxximilian", content: "Recap React", variantColor: "bg-sky-500" }, { author: "Maxximilian", content: "Recap React", variantColor: "bg-sky-500/75" }, { author: "Max", content: "I like React", variantColor: "bg-sky-500/50" }]);

  const createPost = (post: Post) => {
    setPosts([...posts, post]);
  }

  return (<>
    <Header createNewPost={createPost}></Header>
    <Separator></Separator>
    <PostList posts={posts} />
  </>
  )
}