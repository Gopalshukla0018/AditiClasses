import MissionVision from "@/components/MissionVision";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Students Taught" },
    { icon: Award, value: "6+", label: "Years Experience" },
    { icon: Target, value: "100%", label: "Pass Rate" },
    { icon: TrendingUp, value: "95%", label: "Score Improvement" },
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We believe in providing the highest quality education that nurtures both academic excellence and character development."
    },
    {
      title: "Personalized Attention",
      description: "Every student is unique. We ensure personalized attention to cater to individual learning styles and pace."
    },
    {
      title: "Innovation in Teaching",
      description: "We continuously update our teaching methods to incorporate the latest educational innovations and technology."
    },
    {
      title: "Parent Partnership",
      description: "We work closely with parents to ensure consistent support and tracking of student progress."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            About Aditi Classes
          </h1>
          <p className="text-lg text-muted-foreground">
            Empowering students with quality education since 2018
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <stat.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground" data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MissionVision />

      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Join Our Growing Family
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Become part of a community dedicated to academic excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/demo">
                <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover-elevate active-elevate-2" data-testid="button-book-demo">
                  Book Free Demo
                </button>
              </a>
              <a href="/contact">
                <button className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover-elevate active-elevate-2" data-testid="button-contact">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
