import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="h-full hover-elevate">
      <CardContent className="space-y-4 p-6">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'fill-chart-4 text-chart-4' : 'text-muted'}`}
              data-testid={`star-${i}`}
            />
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-testimonial">
          "{content}"
        </p>
        
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground" data-testid="text-name">{name}</div>
            <div className="text-xs text-muted-foreground" data-testid="text-role">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
