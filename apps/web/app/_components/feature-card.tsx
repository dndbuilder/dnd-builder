import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 font-medium text-xl">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
