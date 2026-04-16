import { Card, CardContent, CardHeader } from "./ui/card";


interface PostProps {
    author: string;
    content: string;
    variantColor: string;
}
export default function Post({ author, content, variantColor }: PostProps) {

    const bg = variantColor.trim() !== "" ? `bg-sky-500/${variantColor}` : "bg-sky-500";
    console.log("bg", bg);
    return <Card className={bg} >
        <CardHeader className="font-bold text-left uppercase">{author}</CardHeader>
        <CardContent className="text-left italic">{content}</CardContent>
    </Card>;
}