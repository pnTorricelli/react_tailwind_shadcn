import { Separator } from "@/components/ui/separator";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

interface PostPost {
  author: string;
  body: string;
}


export default function RootLayout() {
  const createPost = (post: PostPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
  };
  return (
    <>
      <Header createNewPost={createPost}></Header>
      <Separator></Separator>
      <Outlet />

    </>
  );
}
