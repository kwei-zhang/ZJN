"use client"

import { BreadcrumbComponent } from "@/components/breadcrumb";
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
import { usePathname } from 'next/navigation';

export default function BlogsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    let subName = null;
    if (pathname.includes('/lists/todo')) {
        subName = 'Todo';
    } else if (pathname.includes('/lists/interests')) {
        subName = 'Interests';
    }

    return (
        <>
            <BreadcrumbComponent name="Lists" subName={subName} href="/lists" />
            <div className="flex flex-col items-center w-full h-full">
                <MotionWrapperVertical>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Lists
                    </h2>
                    <p className="text-muted-foreground">
                        A list of my favorite things, todos, and other lists.
                    </p>
                </MotionWrapperVertical>
                
                <Separator className="w-10/12 my-4" />

                {children}
            </div>
        </>
    );
}
