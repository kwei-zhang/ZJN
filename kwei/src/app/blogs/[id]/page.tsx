"use client"

import { BlogBadge } from "@/components/blogs/blogBadge";
import { MotionWrapperVertical } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            if (!id || typeof id !== 'string') return;
            try {
                const response = await fetch(`/api/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, [id]);

    if (!id || typeof id !== 'string') {
        return <div>Blog not found</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Blogs
            </h2>
            <p className="text-muted-foreground">
                A collection of my thoughts and experiences.
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 mt-4" />

        <MotionWrapperVertical delay={0.6} className="w-full flex flex-col items-center">
            <div className="w-10/12 my-4 flex flex-row justify-center">
                <Input placeholder="Search" className=" mr-4" />
                <Button>Search</Button>
            </div>
            <BlogBadge />
        </MotionWrapperVertical>

        <MotionWrapperVertical delay={0.8} className="w-full">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </MotionWrapperVertical>
        </>
    );
}