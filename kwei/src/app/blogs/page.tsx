import { BlogCard } from "@/components/blogs/blogCard";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator"

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
    {
        title: "Blog 5",
        description: "Blog 5 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/5",
    },
    {
        title: "Blog 6",
        description: "Blog 6 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/6",
    },
    {
        title: "Blog 7",
        description: "Blog 7 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/7",
    },
    {
        title: "Blog 8",
        description: "Blog 8 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/8",
    },
    {
        title: "Blog 9",
        description: "Blog 9 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/9",
    },
    {
        title: "Blog 10",
        description: "Blog 10 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/10",
    },
    {
        title: "Blog 11",
        description: "Blog 11 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/11",
    },
    {
        title: "Blog 12",
        description: "Blog 12 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/12",
    },
    {
        title: "Blog 13",
        description: "Blog 13 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/13",
    },
    {
        title: "Blog 14",
        description: "Blog 14 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/14",
    },
    {
        title: "Blog 15",
        description: "Blog 15 description",
        tags: ["HTML", "CSS", "JS"],
        href: "/blogs/15",
    }
]

export default function Blogs() {
    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Blogs
            </h2>
            <p className="text-muted-foreground">
                A collection of my thoughts and experiences.
            </p>
            <Separator className="w-10/12 my-4" />
        </MotionWrapperVertical>

        

        <MotionWrapperVertical delay={0.6} className="w-full">
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {blogs.map((blog) => (
                    <BlogCard key={blog.title} title={blog.title} description={blog.description} href={blog.href} tags={blog.tags} className="w-5/12" />
                ))}
            </div>
        </MotionWrapperVertical>
        </>
    );
}
