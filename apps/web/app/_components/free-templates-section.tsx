import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TemplateCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

function TemplateCard({
  title,
  description,
  imageSrc,
  href,
}: TemplateCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <Button asChild variant="outline" className="mt-4 w-full">
          <Link href={href}>Use Template</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function FreeTemplatesSection() {
  return (
    <section className="container mx-auto py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Free Templates
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get started quickly with our collection of free templates
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
        <TemplateCard
          title="Landing Page"
          description="Perfect for product launches and marketing campaigns"
          imageSrc="https://kzmqu8a7cwg5rzmkt9x2.lite.vusercontent.net/placeholder.svg?height=300&width=400"
          href="#"
        />
        <TemplateCard
          title="Portfolio"
          description="Showcase your work with this elegant template"
          imageSrc="https://kzmqu8a7cwg5rzmkt9x2.lite.vusercontent.net/placeholder.svg?height=300&width=400"
          href="#"
        />
        <TemplateCard
          title="Blog"
          description="Start sharing your ideas with this clean blog template"
          imageSrc="https://kzmqu8a7cwg5rzmkt9x2.lite.vusercontent.net/placeholder.svg?height=300&width=400"
          href="#"
        />
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="#">View All Free Templates</Link>
        </Button>
      </div>
    </section>
  );
}
