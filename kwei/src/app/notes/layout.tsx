import { BreadcrumbComponent } from "@/components/breadcrumb";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BreadcrumbComponent name="Notes" href="/notes" />
            <div className="flex flex-col items-center w-full h-full">
                {children}
            </div>
        </>
    );
}
