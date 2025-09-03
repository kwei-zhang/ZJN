'use client';

import { useEffect, useState } from "react";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator"
import { Note } from "@/types/notes";
import { NoteCard } from "@/components/notes/noteCard";
export default function Notes() {
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
        
        <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground text-center">
                Notes are currently being updated. Check back soon!
            </p>
        </div>
        </>
    );
}
