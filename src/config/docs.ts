import { SidebarNavItem } from "@/components/sidebar-nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface MainNavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "GitHub",
      href: "https://github.com",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "components.json",
          href: "/docs/components-json",
        },
        {
          title: "Theming",
          href: "/docs/theming",
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
        },
        {
          title: "CLI",
          href: "/docs/cli",
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/Button",
        },
        {
          title: "Input",
          href: "/docs/components/Input",
        },
        {
          title: "Pages",
          href: "/docs/components/Pages",
        },
        {
          title: "Textarea",
          href: "/docs/components/Textarea",
        },
        {
          title: "Toggle",
          href: "/docs/components/Toggle",
        },
        {
          title: "TripleDotMenu",
          href: "/docs/components/TripleDotMenu",
        },
      ],
    },
  ],
};