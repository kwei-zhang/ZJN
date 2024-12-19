"use client"

import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
export default function ProjectPage() {

    const params = useParams();

    return (
        <>
            <MotionWrapperVertical>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Projects
                </h2>
                <p className="text-muted-foreground">
                    A collection of my projects.
                </p>
                
            </MotionWrapperVertical>

            <Separator className="w-10/12 mt-4" />
            
            <MotionWrapperVertical delay={0.8} className="w-full">
                <h1>Project Page with id: {params.id}</h1>
            </MotionWrapperVertical>
        </>
    );
}