'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import { MotionWrapperVertical } from '@/components/motion';

export default function NotePage() {
    const params = useParams();
    const [note, setNote] = useState<{ content: string } | null>(null);

    useEffect(() => {
        const fetchNote = async () => {
            const response = await fetch(`/api/notes/${params.id}`);
            const data = await response.json();
            setNote(data);
        };

        fetchNote();
    }, [params.id]);

    if (!note) return <div>Loading...</div>;

    return (
        <MotionWrapperVertical>
            <div className="prose dark:prose-invert m-6">
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkGemoji]}
                className="line-break"
                >{note.content}</ReactMarkdown>
            </div>
        </MotionWrapperVertical>
    );
}