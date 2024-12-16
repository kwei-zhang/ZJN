import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function BlogsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BreadcrumbComponent name="Blogs" href="/blogs" />
            <div className="flex flex-col items-center w-full h-full">
                {children}
            </div>
        </>
    );
}
