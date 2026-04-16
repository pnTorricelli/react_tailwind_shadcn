

import Post from "./Post"
import type { Post as PostType } from "../App"

interface PostListProps {
    posts: PostType[]
}

export default function PostList({ posts }: PostListProps) {
    return <div className="grid grid-flow-rows grid-cols-3 flex-wrap gap-4 m-6">
        {posts.map((post) => <Post key={post.id} author={post.author} body={post.body} />)}
    </div>

}