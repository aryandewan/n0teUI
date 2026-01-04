import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Docs
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          Re-usable components built using Radix UI and Tailwind CSS.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Accessible</div>
        <Separator orientation="vertical" />
        <div>Customizable</div>
        <Separator orientation="vertical" />
        <div>Open Source</div>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <p>
          This is <strong>NOT</strong> a component library. It&apos;s a collection of re-usable
          components that you can copy and paste into your apps.
        </p>
        <p>
          <strong>What do you mean by not a component library?</strong>
        </p>
        <p>
          I mean you do not install it as a dependency. It is not available or distributed via npm.
        </p>
        <p>
          Pick the components you need. Copy and paste the code into your project and customize to your needs.
          The code is yours.
        </p>
        <p>
          <em>Use this as a reference to build your own component libraries.</em>
        </p>
      </div>
      
      <div className="space-y-4 pt-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          FAQ
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Why copy/paste and not packaged as a dependency?
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Start with some sensible defaults, then customize the components to your needs.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.
            </p>
          </div>
          
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Do you plan to publish it as an npm package?
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              No. I have no plans to publish it as an npm package.
            </p>
          </div>
          
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Which frameworks are supported?
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You can use any framework that supports React. Next.js, Gatsby, Remix, Astro etc.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8">
        <Link href="/docs/installation">
          <Button>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}