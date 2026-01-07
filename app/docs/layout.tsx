"use client";

import { SiteHeader } from "@/components/site-header";
import { SidebarNav } from "@/components/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 items-start md:flex md:gap-6 lg:gap-10">
        <aside className="fixed z-30 hidden w-full shrink-0 md:sticky md:block md:w-[220px] lg:w-[240px]">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <SidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="md:flex-1 md:min-w-0">
          <div className="flex justify-center items-center">{children}</div>
        </main>
      </div>
    </div>
  );
}
