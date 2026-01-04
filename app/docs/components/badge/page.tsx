import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BadgePage() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Docs
        </div>
        <div className="text-muted-foreground">/</div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Components
        </div>
        <div className="text-muted-foreground">/</div>
        <div className="font-medium text-foreground">Badge</div>
      </div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Badge
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>
      <Separator className="my-4" />
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Preview
          </h2>
          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <Badge>Badge</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Installation
          </h2>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                npx shadcn-ui@latest add badge
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Usage
          </h2>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
{`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Examples
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Default
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Badge>Badge</Badge>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Secondary
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Badge variant="secondary">Secondary</Badge>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Outline
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Destructive
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}