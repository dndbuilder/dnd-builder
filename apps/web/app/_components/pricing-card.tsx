import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border ${highlighted ? "border-black shadow-lg" : "border-border shadow-sm"} bg-background p-6 transition-all`}
    >
      {popular && (
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            Popular
          </span>
        </div>
      )}
      {highlighted && (
        <div className="absolute top-0 right-0">
          <div className="h-16 w-16 translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && (
            <span className="ml-1 text-muted-foreground">{period}</span>
          )}
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="mr-2 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={buttonVariant} asChild>
        <Link href="#">{buttonText}</Link>
      </Button>
    </div>
  );
}
