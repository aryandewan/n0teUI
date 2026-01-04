import { Separator } from "@/components/ui/separator"

export default function InstallationPage() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Docs
        </div>
        <div className="text-muted-foreground">/</div>
        <div className="font-medium text-foreground">Installation</div>
      </div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>
      <Separator className="my-4" />
      
      <div className="space-y-6">
        <p>
          You can use the CLI to add components to your project.
        </p>
        
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Requirements
          </h2>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>React 18+</li>
            <li>Tailwind CSS</li>
            <li>Node.js 16+</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            New Project
          </h2>
          <p>
            Start by creating a new Next.js project using <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">create-next-app</code>:
          </p>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                npx create-next-app@latest my-app --typescript --tailwind --eslint
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Add Tailwind CSS
          </h2>
          <p>
            Components are styled using Tailwind CSS. You need to install Tailwind CSS in your project.
          </p>
          <p>
            Follow the <a href="https://tailwindcss.com/docs/installation" className="font-medium underline underline-offset-4">Tailwind CSS installation instructions</a> to get started.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Add dependencies
          </h2>
          <p>
            Add the following dependencies to your project:
          </p>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Configure path mapping
          </h2>
          <p>
            I use the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">@</code> prefix to import components. This is how I configure it in <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">tsconfig.json</code>:
          </p>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Configure cn helper
          </h2>
          <p>
            I use a <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">cn</code> helper to make it easier to conditionally add Tailwind CSS classes. Here&apos;s how I define it in <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">src/lib/utils.ts</code>:
          </p>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            That&apos;s it
          </h2>
          <p>
            You can now start adding components to your project.
          </p>
        </div>
      </div>
    </div>
  )
}