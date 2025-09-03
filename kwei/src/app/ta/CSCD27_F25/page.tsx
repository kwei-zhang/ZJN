"use client"
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";

export default function CSCD27Notes() {
    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                CSCD27 Notes
            </h2>
            <p className="text-muted-foreground">
                A list of notes for CSCD27
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 m-4" />

        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center mt-10">
                To be updated.
            </h2>
        </MotionWrapperVertical>
        </>
    )
}