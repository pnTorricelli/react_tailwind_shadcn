
import { Header } from "./components/Header"
import PostList from "./components/PostList"
import { Separator } from "./components/ui/separator"

export default function App() {
  return (<>
    <Header></Header>
    <Separator></Separator>
    <PostList />
  </>
  )
}