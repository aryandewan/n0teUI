import Link from "next/link"
import { ArrowRight, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const examples = [
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    description: "A dashboard with navigation, stats cards, and charts.",
    image: "/examples/dashboard.jpg",
  },
  {
    name: "Cards",
    href: "/examples/cards",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards",
    description: "Examples of cards built using the components.",
    image: "/examples/cards.jpg",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks",
    description: "A task and issue tracker build using Tanstack Table.",
    image: "/examples/tasks.jpg",
  },
  {
    name: "Playground",
    href: "/examples/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground",
    description: "The playground is for you to experiment with themes.",
    image: "/examples/playground.jpg",
  },
  {
    name: "Forms",
    href: "/examples/forms",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
    description: "Forms built using React Hook Form and Zod.",
    image: "/examples/forms.jpg",
  },
  {
    name: "Music",
    href: "/examples/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music",
    description: "A music app with playlists and a player.",
    image: "/examples/music.jpg",
  },
]

export default function ExamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                Examples
              </h1>
              <p className="text-lg text-muted-foreground">
                Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.
              </p>
            </div>
            <div className="pb-8 pt-6 md:py-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {examples.map((example) => (
                  <Card key={example.name} className="group relative overflow-hidden">
                    <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-sm text-muted-foreground">
                          {example.name} Preview
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{example.name}</CardTitle>
                        <Badge variant="secondary">New</Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {example.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <Link href={example.href}>
                          <Button size="sm" className="h-8">
                            Preview
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                        <Link
                          href={example.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Github className="h-3 w-3" />
                            <span className="sr-only">View code</span>
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 rounded-md bg-muted px-4 py-2">
                <Star className="h-4 w-4" />
                <span className="text-sm">
                  More examples coming soon. Follow us on{" "}
                  <Link
                    href="https://twitter.com"
                    className="font-medium underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>{" "}
                  for updates.
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}