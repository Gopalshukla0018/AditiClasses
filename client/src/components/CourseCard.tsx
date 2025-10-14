import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, IndianRupee } from "lucide-react";

interface CourseCardProps {
  title: string;
  grade: string;
  subjects: string[];
  timing: string;
  duration: string;
  price: number;
  color?: string;
}

export default function CourseCard({ 
  title, 
  grade, 
  subjects, 
  timing, 
  duration, 
  price,
  color = "primary"
}: CourseCardProps) {
  return (
    <Card className="group overflow-hidden border-t-4 transition-all hover-elevate" style={{ borderTopColor: `hsl(var(--${color}))` }}>
      <CardHeader className="space-y-2 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Badge variant="secondary" className="mb-2" data-testid={`badge-grade-${grade}`}>{grade}</Badge>
            <CardTitle className="text-xl" data-testid={`text-course-title-${title}`}>{title}</CardTitle>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-subject-${subject}`}>
              {subject}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 pb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span data-testid="text-timing">{timing}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span data-testid="text-duration">{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold text-foreground">
          <IndianRupee className="h-5 w-5" />
          <span data-testid="text-price">{price}</span>
          <span className="text-sm font-normal text-muted-foreground">/month</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" data-testid="button-enroll">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}
