import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import type { Post } from "@/App";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface DialogNewPostProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    createNewPost: (post: Post) => void;
}

export function DialogNewPost({ isOpen, onOpenChange, createNewPost }: DialogNewPostProps) {

    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [variantColor, setVariantColor] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createNewPost({ author, content, variantColor });
        onOpenChange(false);
    }
    return (<Dialog open={isOpen} onOpenChange={onOpenChange}>

        <DialogContent>
            <DialogTitle>Create Post</DialogTitle>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Author" className="text-right">
                            Author
                        </Label>
                        <Input id="author" placeholder="Post Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="content" className="text-right">
                            Content
                        </Label>
                        <Textarea rows={1} id="content" placeholder="Post content" value={content} onChange={(e) => setContent(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            VariantColor
                        </Label>
                        <Select onValueChange={setVariantColor} value={variantColor}>
                            <SelectTrigger size="sm" className="col-span-3" >
                                <SelectValue placeholder="Select a color" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="bg-sky-500">bg-sky-500</SelectItem>
                                    <SelectItem value="bg-sky-500/75">bg-sky-500/75</SelectItem>
                                    <SelectItem value="bg-sky-500/50">bg-sky-500/50</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select >

                    </div>
                </div>
                <Button type="submit" >Create Post</Button>
            </form>
        </DialogContent>
    </Dialog>)

}