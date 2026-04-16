
import { MessageSquareText, NotepadText } from 'lucide-react';
import { Button } from './ui/button';
export function Header() {

    return <><div className='w-full p-6 flex justify-between items-center '>
        <div className='flex items-center space-x-2'>
            <MessageSquareText color='white' size={30} />
            <h2 className='text-white text-xl font-bold' >React Poster</h2>
        </div>
        <Button className='text-xs font-bold p-5'><NotepadText size={20} /> New Post</Button>
    </div>  </>
};