import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ButtonPage() {
  return (
    <div className="space-y-2 text-white">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Button
        </h1>
        <p className="text-md text-white/50">
          Displays a button or a component that looks like a button.
        </p>
      </div>
      <Separator className="my-4" />
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Preview
          </h2>
          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <Button>Button</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Installation
          </h2>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                npx shadcn-ui@latest add button
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Usage
          </h2>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
{`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
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
                <Button>Button</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Secondary
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Button variant="secondary">Secondary</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Destructive
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Button>Destructive</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Outline
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Button variant="outline">Outline</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibent tracking-tight">
                Ghost
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Link
              </h3>
              <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Sizes
              </h3>
              <div className="flex items-center justify-center space-x-4 rounded-md border border-dashed p-8">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}