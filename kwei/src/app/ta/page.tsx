"use client"
import { CourseCard } from "@/components/courses/courseCard";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";

export default function TANotes() {

    const router = useRouter();

    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                TA Notes
            </h2>
            <p className="text-muted-foreground">
                A list of notes for TA jobs
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 m-4" />

        <div onClick={() => router.push("/CSCB20") }> 
            <CourseCard courseCode="CSCB20" courseName="Introduction to Databases and Web Applications" courseDescription="A practical introduction to databases and Web app development." /> 
        </div>

        <div onClick={() => alert("not yet available")}> 
            <CourseCard courseCode="CSCD27" courseName="Computer and Network Security" courseDescription="This course is meant to offer Computer Science undergraduate students a broad overview of the field of computer security." /> 
        </div>
        </>
    )
}