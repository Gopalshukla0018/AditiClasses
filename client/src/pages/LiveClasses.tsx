import LiveClassCard from "@/components/LiveClassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LiveClasses() {
  const upcomingClasses = [
    {
      title: "Advanced Algebra Concepts",
      subject: "Mathematics",
      teacher: "Mrs. Aditi Sharma",
      date: "Monday, March 18, 2024",
      time: "5:00 PM - 6:30 PM",
      duration: "90 mins",
      enrolled: 18,
      maxStudents: 25,
      status: "upcoming" as const
    },
    {
      title: "Science Experiment: Photosynthesis",
      subject: "Science",
      teacher: "Mr. Rahul Verma",
      date: "Tuesday, March 19, 2024",
      time: "4:00 PM - 5:00 PM",
      duration: "60 mins",
      enrolled: 15,
      maxStudents: 20,
      status: "upcoming" as const
    },
    {
      title: "English Grammar - Tenses",
      subject: "English",
      teacher: "Mrs. Sneha Gupta",
      date: "Wednesday, March 20, 2024",
      time: "6:00 PM - 7:00 PM",
      duration: "60 mins",
      enrolled: 22,
      maxStudents: 25,
      status: "upcoming" as const
    },
  ];

  const liveClasses = [
    {
      title: "Mental Math Tricks",
      subject: "Mathematics",
      teacher: "Mrs. Aditi Sharma",
      date: "Today",
      time: "5:00 PM - 6:00 PM",
      duration: "60 mins",
      enrolled: 20,
      maxStudents: 25,
      status: "live" as const
    },
  ];

  const completedClasses = [
    {
      title: "Introduction to Fractions",
      subject: "Mathematics",
      teacher: "Mrs. Aditi Sharma",
      date: "Friday, March 15, 2024",
      time: "5:00 PM - 6:30 PM",
      duration: "90 mins",
      enrolled: 24,
      maxStudents: 25,
      status: "completed" as const
    },
    {
      title: "Parts of Speech",
      subject: "English",
      teacher: "Mrs. Sneha Gupta",
      date: "Thursday, March 14, 2024",
      time: "6:00 PM - 7:00 PM",
      duration: "60 mins",
      enrolled: 19,
      maxStudents: 25,
      status: "completed" as const
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Live Classes
          </h1>
          <p className="text-lg text-muted-foreground">
            Join interactive sessions with expert teachers
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 w-full justify-start">
              <TabsTrigger value="upcoming" data-testid="tab-upcoming">
                Upcoming ({upcomingClasses.length})
              </TabsTrigger>
              <TabsTrigger value="live" data-testid="tab-live">
                Live Now ({liveClasses.length})
              </TabsTrigger>
              <TabsTrigger value="completed" data-testid="tab-completed">
                Completed ({completedClasses.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingClasses.map((classInfo, index) => (
                  <LiveClassCard key={index} {...classInfo} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="live" className="space-y-6">
              {liveClasses.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-lg text-muted-foreground">No live classes at the moment</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {liveClasses.map((classInfo, index) => (
                    <LiveClassCard key={index} {...classInfo} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {completedClasses.map((classInfo, index) => (
                  <LiveClassCard key={index} {...classInfo} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
