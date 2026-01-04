import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CardPage() {
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
        <div className="font-medium text-foreground">Card</div>
      </div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Card
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>
      <Separator className="my-4" />
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Preview
          </h2>
          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name">Name</label>
                      <input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="framework">Framework</label>
                      <select>
                        <option value="">Select</option>
                        <option value="next">Next.js</option>
                        <option value="sveltekit">SvelteKit</option>
                        <option value="astro">Astro</option>
                        <option value="nuxt">Nuxt.js</option>
                      </select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Installation
          </h2>
          <div className="overflow-x-auto">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                npx shadcn-ui@latest add card
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
{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}