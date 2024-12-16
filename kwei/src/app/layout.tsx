import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar"

export const metadata: Metadata = {
  title: "ZJN",
  description: "ZJN's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="h-screen">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 m-8 justify-center items-center">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
