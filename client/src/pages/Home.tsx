import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import MissionVision from "@/components/MissionVision";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import studyImage from "@assets/generated_images/Kids_learning_illustration_colorful_b09ba0ad.png";

export default function Home() {
  const courses = [
    {
      title: "Foundation Program",
      grade: "Nursery - Class 2",
      subjects: ["English", "Math", "EVS"],
      timing: "Mon-Fri, 4:00 PM - 5:00 PM",
      duration: "3 Months",
      price: 2000,
      color: "primary"
    },
    {
      title: "Primary Excellence",
      grade: "Class 3 - Class 5",
      subjects: ["Math", "Science", "English", "EVS"],
      timing: "Mon-Fri, 5:00 PM - 6:30 PM",
      duration: "3 Months",
      price: 2500,
      color: "chart-2"
    },
    {
      title: "Middle School Mastery",
      grade: "Class 6 - Class 8",
      subjects: ["Math", "Science", "English", "Social Studies"],
      timing: "Mon-Fri, 6:30 PM - 8:00 PM",
      duration: "3 Months",
      price: 3000,
      color: "accent"
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class 6 Student",
      content: "My daughter's confidence in Math has improved tremendously. The personalized attention and teaching methods are excellent!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Class 4 Student",
      content: "Best decision we made for our son's education. The live classes are interactive and the study materials are comprehensive.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Parent of Class 7 Student",
      content: "The teachers are very dedicated and always available to clear doubts. My daughter looks forward to every class!",
      rating: 5
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Popular Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive programs designed for every grade level
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/courses">
              <Button size="lg" variant="outline" data-testid="button-view-all-courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img 
                src={studyImage} 
                alt="Kids learning together" 
                className="rounded-2xl shadow-lg"
                data-testid="img-study"
              />
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Why Choose Aditi Classes?
              </h2>
              
              <div className="space-y-4">
                {[
                  { title: "Experienced Teachers", desc: "6+ years of dedicated teaching with proven results" },
                  { title: "Small Batch Size", desc: "Maximum 20 students per batch for personalized attention" },
                  { title: "Live Interactive Classes", desc: "Engaging online sessions with real-time doubt clearing" },
                  { title: "Comprehensive Materials", desc: "Well-structured worksheets and study resources" },
                  { title: "Regular Assessments", desc: "Track progress with periodic tests and feedback" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Parents Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our happy parents and students
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Book a free demo class and experience the difference
          </p>
          <Link href="/demo">
            <Button size="lg" variant="secondary" className="text-base" data-testid="button-cta-demo">
              Book Your Free Demo Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
