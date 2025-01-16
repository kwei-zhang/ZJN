'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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
        <div>
            <p>{note.content}</p>
        </div>
    );
}