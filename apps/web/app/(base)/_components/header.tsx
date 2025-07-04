import Link from "next/link";
import { FiLayers } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { classNames } from "@/lib/utils";
import { TbDragDrop } from "react-icons/tb";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={classNames(
        "sticky top-0 z-50 border-b border-gray-300 bg-white/80 backdrop-blur-sm",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-black">
            <TbDragDrop className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">DnD Builder</span>
        </Link>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href="/#features" className="text-gray-600 transition-colors hover:text-gray-900">
            Features
          </Link>
          <Link href="/#pricing" className="text-gray-600 transition-colors hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/docs" className="text-gray-600 transition-colors hover:text-gray-900">
            Docs
          </Link>
          <Link href="/contact" className="text-gray-600 transition-colors hover:text-gray-900">
            Contact
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="border-gray-300" size="sm">
              <Link href="/login" className="flex items-center space-x-1">
                <span>Login</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register" className="flex items-center space-x-1">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
