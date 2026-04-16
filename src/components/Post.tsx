import { Card, CardContent, CardHeader } from "./ui/card";


interface PostProps {
    author: string;
    body: string;
}
export default function Post({ author, body }: PostProps) {

    return <Card className="bg-sky-500" >
        <CardHeader className="font-bold text-left uppercase">{author}</CardHeader>
        <CardContent className="text-left italic">{body}</CardContent>
    </Card>;
}