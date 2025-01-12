'use client';

import { useState, useEffect } from 'react';
import { ProjectCard } from "@/components/projects/projectCard";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator"
import { Project } from "@/types/projects";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch(`/api/projects`);
            const data = await res.json();
            setProjects(data);
        };

        fetchProjects();
    }, []);

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

        <Separator className="w-10/12 my-4" />

        <MotionWrapperVertical delay={0.6} className="w-full">
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {projects.map((project: Project) => (
                    <ProjectCard 
                    key={project.title} 
                    title={project.title} 
                    description={project.description} 
                    href={project.href} 
                    tags={project.tags} 
                    className="w-10/12 hover:scale-105 transition-all duration-300 hover:border-purple-500" />
                ))}
            </div>
        </MotionWrapperVertical>
        </>
    );
}
