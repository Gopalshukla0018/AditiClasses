import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Teacher_with_students_classroom_scene_78b79ced.png";

export default function Hero() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Students" },
    { icon: BookOpen, value: "6+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "Parent Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              <Star className="h-4 w-4 fill-primary" />
              Trusted by 500+ Parents
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Unlock Your Child's
              <span className="block text-primary">True Potential</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Quality education for Nursery to 8th grade with personalized attention. 
              6+ years of teaching experience delivering excellence in every class.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="text-base" data-testid="button-hero-demo">
                  Book Free Demo Class
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-base" data-testid="button-hero-courses">
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground" data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="Teacher with students in classroom" 
                className="h-full w-full object-cover"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-chart-2/20 blur-2xl"></div>
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
