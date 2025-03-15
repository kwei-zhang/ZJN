'use client';

import { useEffect, useState } from "react";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator"
import { Note } from "@/types/notes";
import { NoteCard } from "@/components/notes/noteCard";
export default function Projects() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('/api/notes');
                const data = (await response.json()).notes;
                setNotes(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching notes:', error);
                setNotes([]);
            }
        };

        fetchNotes();
    }, []);

    console.log(notes);

    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Notes
            </h2>
            <p className="text-muted-foreground">
                A collection of my learning notes/thoughts.
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 my-4" />

        <MotionWrapperVertical delay={0.6} className="w-10/12">
            {notes.map((note: Note, index) => (
                <NoteCard key={index} title={note.title} description={note.description} href={`/notes/${note.filename}`} date={note.date} tags={note.tags} />
            ))}
        </MotionWrapperVertical>
        </>
    );
}
