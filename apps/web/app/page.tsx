import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import CodePreview from "./_components/code-preview";
import FeatureCard from "./_components/feature-card";
import PricingCard from "./_components/pricing-card";
import TestimonialCard from "./_components/testimonial-card";
import FreeTemplatesSection from "./_components/free-templates-section";
import BlockLibrariesSection from "./_components/block-libraries-section";
import { TbDragDrop } from "react-icons/tb";
import {
  LuArrowRight,
  LuCode,
  LuGithub,
  LuPalette,
  LuPuzzle,
  LuZap,
} from "react-icons/lu";
import { DragDropIcon } from "./_components/drag-drop-icon";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <TbDragDrop className="h-6 w-6" />
              <span className="inline-block font-bold">DnD Builder</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Demo
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#docs"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Documentation
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  <LuGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Button asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-10 md:pb-12 md:pt-10 lg:py-32">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              The Ultimate <span className="font-bold">Drag-and-Drop</span> Page
              Builder
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Empower your users with DnD Builder's intuitive drag-and-drop
              interface. Integrate our React & TypeScript package into your
              application in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#get-started">
                  Get Started <LuArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Powerful drag-and-drop for your users
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our page builder package gives your users the freedom to create
              and customize their own pages without writing a single line of
              code.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
            <FeatureCard
              icon={<LuZap className="h-10 w-10 text-black" />}
              title="Lightning Fast"
              description="Built with performance in mind. Optimized rendering ensures smooth user experience even with complex pages."
            />
            <FeatureCard
              icon={<LuCode className="h-10 w-10 text-black" />}
              title="Developer Friendly"
              description="TypeScript support, clean APIs, and extensive documentation make integration a breeze."
            />
            <FeatureCard
              icon={<LuPalette className="h-10 w-10 text-black" />}
              title="Customizable"
              description="Easily theme and extend components to match your application's design system."
            />
            <FeatureCard
              icon={<LuPuzzle className="h-10 w-10 text-black" />}
              title="Extensible"
              description="Create custom blocks and components to extend functionality for your specific use case."
            />
            <FeatureCard
              icon={<DragDropIcon className="h-10 w-10 text-black" />}
              title="Nested Components"
              description="Support for deeply nested components with intuitive drag and drop interface."
            />
            <FeatureCard
              icon={<DragDropIcon className="h-10 w-10 text-black" />}
              title="Tiered Pricing"
              description="Get started for free with basic blocks. Upgrade for advanced blocks and premium block libraries."
            />
          </div>
        </section>

        <BlockLibrariesSection />

        <section id="demo" className="container mx-auto py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              See it in action
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Watch how easy it is to build custom pages with our drag-and-drop
              interface.
            </p>
          </div>

          <div className="mx-auto max-w-5xl mt-12 rounded-lg border bg-background p-2 shadow-lg">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://kzmqu8a7cwg5rzmkt9x2.lite.vusercontent.net/placeholder.svg?height=720&width=1280"
                alt="Page Builder Demo"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FreeTemplatesSection />

        <section
          id="code"
          className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Easy to integrate
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Just a few lines of code to add a powerful page builder to your
              application.
            </p>
          </div>

          <div className="mx-auto max-w-4xl mt-12">
            <CodePreview />
          </div>
        </section>

        <section
          id="pricing"
          className="container mx-auto py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start for free, upgrade when you need more power.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for getting started and small projects."
              features={[
                "Basic building blocks",
                "Core drag-and-drop functionality",
                "5 free templates",
                "Basic themes",
                "Community support",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard
              title="Pro"
              price="$49"
              period="/month"
              description="For professional developers and small teams."
              features={[
                "Everything in Free",
                "Advanced blocks",
                "All block libraries",
                "Premium templates",
                "Priority email support",
                "White labeling",
              ]}
              buttonText="Start Free Trial"
              buttonVariant="default"
              highlighted={true}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large teams with specific requirements."
              features={[
                "Everything in Pro",
                "Custom blocks development",
                "Dedicated support",
                "SLA",
                "Custom integrations",
                "Team collaboration tools",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
        </section>

        <section
          id="testimonials"
          className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Loved by developers
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here's what our users have to say about DnD Builder.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
            <TestimonialCard
              quote="Implementing this page builder saved us months of development time. Our users love the flexibility it provides."
              author="Sarah Johnson"
              role="CTO at TechStart"
              avatarSrc="https://kzmpcgpar3lh532ybiau.lite.vusercontent.net/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The TypeScript support and clean API made integration into our existing codebase incredibly smooth."
              author="Michael Chen"
              role="Lead Developer at DevCorp"
              avatarSrc="https://kzmpcgpar3lh532ybiau.lite.vusercontent.net/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Our customers can now create landing pages without our help. Support tickets have decreased by 40%."
              author="Emma Rodriguez"
              role="Product Manager at SaaSify"
              avatarSrc="https://kzmpcgpar3lh532ybiau.lite.vusercontent.net/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The extensibility is what sold us. We've built custom blocks specific to our industry needs."
              author="David Kim"
              role="Frontend Engineer at CreativeStudio"
              avatarSrc="https://kzmpcgpar3lh532ybiau.lite.vusercontent.net/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <section
          id="get-started"
          className="container mx-auto py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Add a powerful page builder to your application today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#">
                  Install Package <LuArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <TbDragDrop className="h-6 w-6" />
            <p className="text-sm leading-loose text-muted-foreground">
              &copy; {new Date().getFullYear()} DnD Builder. All rights
              reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
