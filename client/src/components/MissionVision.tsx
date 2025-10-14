import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import ownerImage from "@assets/generated_images/Professional_educator_portrait_photo_852dc685.png";

export default function MissionVision() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 blur-2xl"></div>
              <img 
                src={ownerImage} 
                alt="Founder of Aditi Classes" 
                className="relative h-80 w-80 rounded-full object-cover border-4 border-background shadow-xl"
                data-testid="img-owner"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                About Our Founder
              </h2>
              <p className="text-lg text-muted-foreground">
                With over 6 years of dedicated teaching experience, our founder has touched the lives 
                of hundreds of students, helping them achieve academic excellence and build confidence.
              </p>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide quality education that nurtures curiosity, builds strong foundations, 
                  and empowers every child to reach their full potential through personalized attention 
                  and innovative teaching methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To become a leading educational institution where every student feels valued, 
                  supported, and inspired to excel academically while developing critical thinking 
                  and problem-solving skills for life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
