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
          title: "Accordion",
          href: "/docs/components/accordion",
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
        },
        {
          title: "Button",
          href: "/docs/components/button",
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
        },
        {
          title: "Card",
          href: "/docs/components/card",
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
        },
        {
          title: "Command",
          href: "/docs/components/command",
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
        },
        {
          title: "Form",
          href: "/docs/components/form",
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
        },
        {
          title: "Input",
          href: "/docs/components/input",
        },
        {
          title: "Label",
          href: "/docs/components/label",
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
        },
        {
          title: "Select",
          href: "/docs/components/select",
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
        },
        {
          title: "Table",
          href: "/docs/components/table",
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
        },
      ],
    },
  ],
}