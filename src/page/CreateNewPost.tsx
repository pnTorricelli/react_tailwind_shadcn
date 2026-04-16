import type { Post } from "@/router/App";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CreateNewPost() {

    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const createPost = (post: Omit<Post, "id">) => {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createPost({ author, body });

    }
    return (<Dialog open={true}  >
        <DialogContent showCloseButton={false} className="bg-emerald-100">
            <DialogTitle>Create Post</DialogTitle>
            <form onSubmit={handleSubmit} className="text-center">
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Author" className="text-right">
                            Author
                        </Label>
                        <Input id="author" placeholder="Post Author" required value={author} onChange={(e) => setAuthor(e.target.value)} className="col-span-3 bg-white" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="body" className="text-right">
                            body
                        </Label>
                        <Textarea rows={1} id="body" placeholder="Post body" required value={body} onChange={(e) => setBody(e.target.value)} className="col-span-3 bg-white" />
                    </div>
                </div >
                <Button type="submit"  >Create Post</Button>
            </form>
        </DialogContent>
    </Dialog>)
}
