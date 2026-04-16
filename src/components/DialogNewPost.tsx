import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import type { Post } from "@/router/App";
import { useState } from "react";

interface DialogNewPostProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    createNewPost: (post: Omit<Post, "id">) => void;
}

export function DialogNewPost({ isOpen, onOpenChange, createNewPost }: DialogNewPostProps) {

    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createNewPost({ author, body });
        onOpenChange(false);
    }
    return (<Dialog open={isOpen} onOpenChange={onOpenChange} >

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