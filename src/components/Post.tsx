import { Card, CardContent, CardHeader } from "./ui/card";


interface PostProps {
    author: string;
    content: string;
    variantColor: string;
}
export default function Post({ author, content, variantColor }: PostProps) {


    return <Card className={variantColor} >
        <CardHeader className="font-bold text-left uppercase">{author}</CardHeader>
        <CardContent className="text-left italic">{content}</CardContent>
    </Card>;
}