import Link from "next/link";
import { ArrowRight, Github, Zap, Palette, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { audio, mono, outfit } from "@/config/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 text-white">
        {/* Hero Section */}
        <section className={`min-h-dvh flex items-center justify-center ${mono.className}`}>
          <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
            <h1 className="cursor-default font-bold text-3xl sm:text-5xl md:text-6xl lg:text-9xl text-white">
              n0te/UI
            </h1>
            <div className={`space-x-4 ${mono.className}`}>
              <Link href="/docs">
                <Button size="lg" className="h-11 cursor-pointer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://github.com/aryandewan/n0teUI"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 cursor-pointer hover:bg-white hover:text-black"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              This project is an experiment to see how a modern app, with
              features like auth, subscriptions, API routes, and static pages
              would work in Next.js 15 app dir.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Zap className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with performance in mind. Fast by default.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Palette className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Customizable</h3>
                  <p className="text-sm text-muted-foreground">
                    Components are styled with Tailwind CSS. Customize to your
                    heart's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Code2 className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Accessible</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with accessibility in mind. WAI-ARIA compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-232 flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Proudly Open Source
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              n0te/UI is open source and powered by open source software. <br />{" "}
              The code is available on{" "}
              <Link
                href="https://github.com/aryandewan/n0teUI"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
