
import { MessageSquareText, NotepadText } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { DialogNewPost } from './DialogNewPost';
import type { Post } from '@/App';

interface HeaderProps {
    createNewPost: (post: Post) => void;
}
export function Header({ createNewPost }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    return <><div className='w-full p-6 flex justify-between items-center '>
        <div className='flex items-center space-x-2'>
            <MessageSquareText color='white' size={30} />
            <h2 className='text-white text-xl font-bold' >React Poster</h2>
        </div>
        <Button className='text-xs font-bold p-5' onClick={() => setIsOpen(true)}>
            <NotepadText size={20} /> New Post
        </Button>
        <DialogNewPost createNewPost={createNewPost} isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>  </>
};