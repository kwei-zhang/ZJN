import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BreadcrumbComponent name="Projects" href="/projects" />
            <div className="flex flex-col items-center w-full h-full">
                {children}
            </div>
        </>
    );
}
