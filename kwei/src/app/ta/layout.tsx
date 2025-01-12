export default function BlogsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex flex-col items-center w-full h-full">
                {children}
            </div>
        </>
    );
}
