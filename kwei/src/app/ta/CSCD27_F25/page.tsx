"use client"
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
            <p className="scroll-m-20 pb-2 font-semibold tracking-tight first:mt-0 text-center mt-10">
                Check my TA notes for CSCD27 <Link href="https://www.notion.so/CSCD27-2685fdbcb98b802dbd99f3aaf7d595bc?source=copy_link" className="text-blue-500 hover:text-blue-700">here</Link>
            </p>
        </MotionWrapperVertical>
        </>
    )
}