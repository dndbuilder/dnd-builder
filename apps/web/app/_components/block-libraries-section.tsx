import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface BlockLibraryCardProps {
  title: string;
  description: string;
  blockCount: number;
  isPremium: boolean;
}

function BlockLibraryCard({
  title,
  description,
  blockCount,
  isPremium,
}: BlockLibraryCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          {isPremium ? (
            <Badge variant="outline" className="border-black text-xs">
              Premium
            </Badge>
          ) : (
            <Badge variant="outline" className="border-black text-xs">
              Free
            </Badge>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {blockCount} blocks
          </span>
          <Link
            href="#"
            className="flex items-center text-xs font-medium hover:underline"
          >
            View Library <FiChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BlockLibrariesSection() {
  return (
    <section className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Block Libraries
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our extensive collection of block libraries for every need
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        <BlockLibraryCard
          title="Basic Elements"
          description="Essential building blocks for any page"
          blockCount={15}
          isPremium={false}
        />
        <BlockLibraryCard
          title="Navigation"
          description="Headers, menus, and navigation components"
          blockCount={12}
          isPremium={false}
        />
        <BlockLibraryCard
          title="Forms & Inputs"
          description="Complete form components and input elements"
          blockCount={20}
          isPremium={true}
        />
        <BlockLibraryCard
          title="E-commerce"
          description="Product displays, carts, and checkout components"
          blockCount={25}
          isPremium={true}
        />
        <BlockLibraryCard
          title="Media Gallery"
          description="Image and video galleries with various layouts"
          blockCount={18}
          isPremium={true}
        />
        <BlockLibraryCard
          title="Content Blocks"
          description="Text layouts, cards, and content presentation"
          blockCount={22}
          isPremium={true}
        />
      </div>
    </section>
  );
}
