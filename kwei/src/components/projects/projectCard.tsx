"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { useRouter } from 'next/navigation'
import { BadgeTag } from "../badge";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    tags: string[];
    className?: string;
    onClick?: () => void;
}

export const ProjectCard = ({ title, description, href, tags, className }: ProjectCardProps) => {

    const router = useRouter();
    return (
        <Card className={className} onClick={() => {
            if (href) {
                router.push(href);
            } else {
                alert("URL unavailable for this project due to privacy reasons.");
            }
        }}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
                {tags.map((tag) => (
                    <BadgeTag name={tag} className="mr-2" key={tag} />
                ))}
            </CardFooter>
        </Card>
    )
}