
import Post from "./Post"

const posts = [{ author: "Maximilian", content: "React.js is awesome!" }, { author: "John", content: "I love coding!", variantColor: "75" }, { author: "Alice", content: "JavaScript is my favorite language!", variantColor: "50" }];

export default function PostList() {
    return <div className="grid grid-flow-col grid-cols-3 gap-4 m-6">
        {posts.map((post, index) => <Post key={index} author={post.author} content={post.content} variantColor={post.variantColor ? post.variantColor : ""} />)}
    </div>

}