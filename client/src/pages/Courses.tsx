import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");

  const allCourses = [
    {
      title: "Early Learning Program",
      grade: "Nursery",
      subjects: ["English", "Numbers", "Activities"],
      timing: "Mon-Fri, 3:30 PM - 4:30 PM",
      duration: "3 Months",
      price: 1800,
      color: "chart-2"
    },
    {
      title: "Foundation Program",
      grade: "Class 1-2",
      subjects: ["English", "Math", "EVS"],
      timing: "Mon-Fri, 4:00 PM - 5:00 PM",
      duration: "3 Months",
      price: 2000,
      color: "primary"
    },
    {
      title: "Mathematics Mastery",
      grade: "Class 3",
      subjects: ["Math", "Mental Math"],
      timing: "Tue-Thu-Sat, 5:00 PM - 6:00 PM",
      duration: "3 Months",
      price: 1500,
      color: "accent"
    },
    {
      title: "Primary Excellence",
      grade: "Class 4-5",
      subjects: ["Math", "Science", "English", "EVS"],
      timing: "Mon-Fri, 5:00 PM - 6:30 PM",
      duration: "3 Months",
      price: 2500,
      color: "chart-3"
    },
    {
      title: "Science Explorer",
      grade: "Class 6",
      subjects: ["Physics", "Chemistry", "Biology"],
      timing: "Mon-Wed-Fri, 6:00 PM - 7:30 PM",
      duration: "3 Months",
      price: 2800,
      color: "chart-4"
    },
    {
      title: "Middle School Complete",
      grade: "Class 7-8",
      subjects: ["Math", "Science", "English", "Social Studies"],
      timing: "Mon-Fri, 6:30 PM - 8:00 PM",
      duration: "3 Months",
      price: 3000,
      color: "chart-5"
    },
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesGrade = selectedGrade === "all" || course.grade.includes(selectedGrade);
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Courses
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the perfect program for your child's learning journey
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses or subjects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-courses"
              />
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-full md:w-48" data-testid="select-grade-filter">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="Nursery">Nursery</SelectItem>
                <SelectItem value="Class 1">Class 1-2</SelectItem>
                <SelectItem value="Class 3">Class 3</SelectItem>
                <SelectItem value="Class 4">Class 4-5</SelectItem>
                <SelectItem value="Class 6">Class 6</SelectItem>
                <SelectItem value="Class 7">Class 7-8</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">No courses found matching your criteria.</p>
              <Button 
                className="mt-4" 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGrade("all");
                }}
                data-testid="button-reset-filters"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
