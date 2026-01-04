import { Bell, Check, CreditCard, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

export default function CardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Cards</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Notification Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </CardTitle>
              <CardDescription>
                You have 3 unread messages.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <Bell className="h-4 w-4" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to device.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <Bell className="h-4 w-4" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Email Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to email.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>

          {/* Payment Method Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payment Method
              </CardTitle>
              <CardDescription>
                Add a new payment method to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="number">Card number</label>
                <input id="number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="month">Expires</label>
                  <select>
                    <option>Month</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="year">Year</label>
                  <select>
                    <option>Year</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue</Button>
            </CardFooter>
          </Card>

          {/* Team Members Card */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Invite your team members to collaborate.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                    <p className="text-sm text-muted-foreground">m@example.com</p>
                  </div>
                </div>
                <Badge variant="secondary">Owner</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-sm text-muted-foreground">p@example.com</p>
                  </div>
                </div>
                <Badge variant="outline">Member</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-sm text-muted-foreground">i@example.com</p>
                  </div>
                </div>
                <Badge variant="outline">Member</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Marketing emails</label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and features.
                  </p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Security emails</label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account security.
                  </p>
                </div>
                <input type="checkbox" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Save preferences
              </Button>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Your performance metrics for this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Revenue</span>
                  <span className="text-sm font-bold">$45,231.89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subscriptions</span>
                  <span className="text-sm font-bold">+2350</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sales</span>
                  <span className="text-sm font-bold">+12,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Users</span>
                  <span className="text-sm font-bold">+573</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Card */}
          <Card>
            <CardHeader>
              <CardTitle>Create Project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
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
    </div>
  )
}