import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiGithub,
  FiLayers,
  FiMail,
  FiMousePointer,
  FiStar,
  FiTwitter,
} from "react-icons/fi";
import {
  LuArrowRight,
  LuDownload,
  LuPackage,
  LuPalette,
  LuPlay,
  LuPlug,
  LuSmartphone,
  LuUndo,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-300 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-black">
              <FiLayers className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DnD Builder</span>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="#features" className="text-gray-600 transition-colors hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 transition-colors hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#docs" className="text-gray-600 transition-colors hover:text-gray-900">
              Docs
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-gray-300" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Now with Premium Features
          </Badge>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Build Beautiful Pages with
            <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              {" "}
              Drag & Drop
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-5xl text-xl leading-relaxed text-gray-600">
            A powerful React page builder with block-based architecture. Create stunning, responsive
            pages with intuitive drag-and-drop functionality and extensive customization options.
          </p>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-black px-8 text-white hover:bg-gray-800">
              <LuDownload className="mr-2 h-4 w-4" />
              Get Started Free
              <LuArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 bg-transparent px-8">
              <LuPlay className="mr-2 h-4 w-4" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Everything You Need to Build
            </h2>
            <p className="mx-auto text-xl text-gray-600">
              From basic building blocks to advanced components, we've got you covered
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <FiLayers className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Block-Based Architecture</Card.Title>
                <Card.Description>
                  Build pages using pre-defined or custom blocks with a modular approach
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <FiMousePointer className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Drag & Drop Interface</Card.Title>
                <Card.Description>
                  Intuitive drag-and-drop functionality powered by React DND
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <LuUndo className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Undo/Redo Support</Card.Title>
                <Card.Description>
                  Built-in history management with Redux Undo for seamless editing
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <LuSmartphone className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Responsive Design</Card.Title>
                <Card.Description>
                  Create layouts that work perfectly across all devices and screen sizes
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <LuPalette className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Customizable UI</Card.Title>
                <Card.Description>
                  Extensive styling options with Tailwind CSS integration
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <Card.Header>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <LuPlug className="h-6 w-6 text-gray-900" />
                </div>
                <Card.Title>Plugin System</Card.Title>
                <Card.Description>
                  Extensible architecture supporting third-party plugins and extensions
                </Card.Description>
              </Card.Header>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Features Showcase */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-4 border-white/30 bg-white/20 text-white">
            ✨ Premium Features
          </Badge>
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Unlock Advanced Components</h2>
          <p className="mx-auto mb-12 text-xl opacity-90">
            Take your page builder to the next level with our premium component library
          </p>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <LuPackage className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Tabs Component</h3>
              <p className="text-sm opacity-80">Interactive tabbed interfaces</p>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <LuPackage className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Drawer Component</h3>
              <p className="text-sm opacity-80">Sliding panel navigation</p>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <LuPackage className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Dropdown Menus</h3>
              <p className="text-sm opacity-80">Advanced dropdown controls</p>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <LuPackage className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Slider Components</h3>
              <p className="text-sm opacity-80">Interactive range sliders</p>
            </div>
          </div>
        </div>
      </section>

      {/*Watch Demo*/}
      <section id="demo" className=" bg-white py-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">See it in action</h2>
          <p className="mx-auto text-xl text-gray-600">
            Watch how easy it is to build custom pages with our drag-and-drop interface.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-lg border border-gray-300 p-2 shadow-lg">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://kzmpcgpar3lh532ybiau.lite.vusercontent.net/placeholder.svg?height=720&width=1280"
              alt="Page Builder Demo"
              width={1280}
              height={720}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="outline" className="">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto text-xl text-gray-600">
              Start building for free, upgrade when you need more power
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <Card className="relative border-2 border-gray-200">
              <Card.Header className="pb-8 text-center">
                <Card.Title className="text-2xl">Free</Card.Title>
                <div className="mt-4 text-4xl font-bold text-gray-900">
                  $0<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <Card.Description className="mt-2">
                  Perfect for getting started and small projects
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Basic block components</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Drag & drop interface</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Undo/Redo functionality</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started Free
                </Button>
              </Card.Content>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-gray-900 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <Badge className="bg-black px-4 py-1 text-white">
                  <FiStar className="mr-1 h-4 w-4" />
                  Most Popular
                </Badge>
              </div>
              <Card.Header className="pb-8 text-center">
                <Card.Title className="text-2xl">Premium</Card.Title>
                <div className="mt-4 text-4xl font-bold text-gray-900">
                  $29<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <Card.Description className="mt-2">
                  Everything in Free plus advanced components
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Tabs component</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Drawer component</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Dropdown menus</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Slider components</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-3 h-5 w-5 text-green-600" />
                    <span>Advanced customization</span>
                  </li>
                </ul>
                <Button className="w-full bg-black hover:bg-gray-800">Upgrade to Premium</Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mx-auto text-xl text-gray-600">
              Install the package and start building beautiful pages right away
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <span className="text-xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Install</h3>
                <p className="text-sm text-gray-600">Add the package to your React project</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <span className="text-xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Import</h3>
                <p className="text-sm text-gray-600">Import the components and styles</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <span className="text-xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Build</h3>
                <p className="text-sm text-gray-600">Start creating amazing pages</p>
              </div>
            </div>

            <Card className="bg-gray-900">
              <Card.Header>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                    Terminal
                  </Badge>
                </div>
              </Card.Header>
              <Card.Content>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm text-gray-400"># Install with npm</p>
                    <p className="font-mono text-green-400">npm install @dndbuilder.com/react</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-gray-400"># Or with yarn</p>
                    <p className="font-mono text-green-400">yarn add @dndbuilder.com/react</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-gray-400"># Or with pnpm</p>
                    <p className="font-mono text-green-400">pnpm add @dndbuilder.com/react</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Start Building?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Join thousands of developers who are already creating amazing experiences with DnD
            Builder
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white px-8 py-3 text-sm text-black hover:bg-gray-100">
              Start Free Trial
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent px-8 py-3 text-sm text-white hover:bg-white hover:text-gray-900"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-black">
                  <FiLayers className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">DnD Builder</span>
              </div>
              <p className="mb-4 text-gray-400">
                The most powerful drag-and-drop page builder for React applications.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <FiGithub className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <FiTwitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <FiMail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Premium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DnD Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
