import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuQuote } from "react-icons/lu";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <div className="mb-4 flex justify-between">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <LuQuote className="h-6 w-6 text-muted-foreground/50" />
      </div>
      <blockquote className="mb-4 text-lg">"{quote}"</blockquote>
      <div>
        <div className="font-medium">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}
