import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Calendar, Clock, Users } from "lucide-react";

interface LiveClassCardProps {
  title: string;
  subject: string;
  teacher: string;
  date: string;
  time: string;
  duration: string;
  enrolled: number;
  maxStudents: number;
  status: "upcoming" | "live" | "completed";
}

export default function LiveClassCard({ 
  title, 
  subject, 
  teacher, 
  date, 
  time, 
  duration, 
  enrolled, 
  maxStudents,
  status 
}: LiveClassCardProps) {
  const statusConfig = {
    upcoming: { label: "Upcoming", color: "bg-chart-3" },
    live: { label: "Live Now", color: "bg-destructive animate-pulse" },
    completed: { label: "Completed", color: "bg-muted" },
  };

  return (
    <Card className="overflow-hidden hover-elevate">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary" data-testid="badge-subject">{subject}</Badge>
              <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white ${statusConfig[status].color}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                {statusConfig[status].label}
              </div>
            </div>
            <CardTitle className="text-lg" data-testid="text-class-title">{title}</CardTitle>
            <p className="text-sm text-muted-foreground" data-testid="text-teacher">by {teacher}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Video className="h-6 w-6" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 pb-4">
        <div className="grid gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span data-testid="text-date">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span data-testid="text-time">{time} ({duration})</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span data-testid="text-enrolled">{enrolled}/{maxStudents} students enrolled</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        {status === "live" ? (
          <Button className="w-full" variant="destructive" data-testid="button-join">
            <Video className="mr-2 h-4 w-4" />
            Join Class Now
          </Button>
        ) : status === "upcoming" ? (
          <Button className="w-full" data-testid="button-register">
            Register for Class
          </Button>
        ) : (
          <Button className="w-full" variant="secondary" data-testid="button-recording">
            View Recording
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
