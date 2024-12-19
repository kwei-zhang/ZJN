import { BlogCard } from "@/components/blogs/blogCard";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { BlogBadge } from "@/components/blogs/blogBadge";

const blogs = [
    {
        title: "Blog 1",
        description: "Blog 1 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/1",
    },
    {
        title: "Blog 2",
        description: "Blog 2 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/2",
    },
    {
        title: "Blog 3",
        description: "Blog 3 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/3",
    },
    {
        title: "Blog 4",
        description: "Blog 4 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/4",
    },
]

export default async function Blogs() {
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
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {blogs.map((blog) => (
                    <BlogCard 
                    key={blog.title} 
                    title={blog.title} 
                    description={blog.description} 
                    href={blog.href} 
                    tags={blog.tags} 
                    className="w-5/12 hover:scale-105 transition-all duration-300 hover:border-purple-500" />
                ))}
            </div>
        </MotionWrapperVertical>
        </>
    );
}
