"use client"
import { useEffect, useRef, useState } from "react"
import { GitMerge, List, GraduationCap, Home, BookCheck, BookOpen } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"



import Link from "next/link"
import { PersonalCard } from "./userCard"
import { usePathname } from "next/navigation"

const items = [
  {
    title: "Projects",
    url: "/projects",
    icon: GitMerge,
  },
  // {
  //   title: "Lists",
  //   url: "/lists",
  //   icon: List,
  // },
  {
    title: "Course works",
    url: "/courseworks",
    icon: GraduationCap,
  },
  {
    title: "Notes",
    url: "/notes",
    icon: BookOpen,
  },
  {
    title: "TA Notes",
    url: "/ta",
    icon: BookCheck,
  }
]

export function AppSidebar() {
  const pathname = usePathname();
  const [analytics, setAnalytics] = useState<{ totalPV: number; totalUV: number } | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lastLoggedPathRef = useRef<string | null>(null);
  const hasHydratedRef = useRef(false);

  useEffect(() => {
    if (lastLoggedPathRef.current === pathname && hasHydratedRef.current) {
      return;
    }

    lastLoggedPathRef.current = pathname;
    hasHydratedRef.current = true;

    let isCancelled = false;

    const recordAndFetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to record analytics");
        }

        const data = (await response.json()) as { totalPV: number; totalUV: number };

        if (!isCancelled) {
          setAnalytics(data);
          setIsError(false);
        }
      } catch (error) {
        console.error(error);
        if (!isCancelled) {
          setIsError(true);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    recordAndFetchAnalytics();

    return () => {
      isCancelled = true;
    };
  }, [pathname]);
  
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Welcome to ZJN&apos;s Website</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <PersonalCard />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className={pathname === "/" ? "rounded-md border border-purple-500" : ""}>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className={pathname.includes(item.url) ? "rounded-md border bg-purple-500" : ""}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="text-sm text-gray-500">
                {isLoading && "Total PV : -- UV : --"}
                {!isLoading && !isError && analytics && (
                  <>Total PV : {analytics.totalPV} UV : {analytics.totalUV}</>
                )}
                {!isLoading && isError && "Total PV : ?? UV : ??"}
              </div>
              <div className="text-sm text-gray-500">
                Copyright © 2025
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
