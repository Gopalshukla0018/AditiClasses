import WorksheetCard from "@/components/WorksheetCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Worksheets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const worksheets = [
    {
      title: "Complete Math Practice Set - Fractions & Decimals",
      subject: "Mathematics",
      grade: "Class 5",
      price: 199,
      pages: 25
    },
    {
      title: "English Grammar Workbook - Comprehensive",
      subject: "English",
      grade: "Class 6",
      price: 249,
      pages: 35
    },
    {
      title: "Science Experiments & Activities",
      subject: "Science",
      grade: "Class 7",
      price: 299,
      pages: 40
    },
    {
      title: "Mental Math Quick Practice - Level 1",
      subject: "Mathematics",
      grade: "Class 3",
      price: 149,
      pages: 15
    },
    {
      title: "EVS Worksheets - Our Environment",
      subject: "EVS",
      grade: "Class 4",
      price: 179,
      pages: 20
    },
    {
      title: "Social Studies Map Work & Questions",
      subject: "Social Studies",
      grade: "Class 8",
      price: 229,
      pages: 30
    },
  ];

  const filteredWorksheets = worksheets.filter(worksheet => {
    const matchesSearch = worksheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         worksheet.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === "all" || worksheet.grade.includes(selectedGrade);
    const matchesSubject = selectedSubject === "all" || worksheet.subject === selectedSubject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Study Materials & Worksheets
              </h1>
              <p className="text-lg text-muted-foreground">
                Download comprehensive worksheets and practice materials
              </p>
            </div>
            <Button size="lg" variant="outline" data-testid="button-cart">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
              <Badge className="ml-2" data-testid="badge-cart-count">0</Badge>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search worksheets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-worksheets"
              />
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-full md:w-40" data-testid="select-grade">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="Class 3">Class 3</SelectItem>
                <SelectItem value="Class 4">Class 4</SelectItem>
                <SelectItem value="Class 5">Class 5</SelectItem>
                <SelectItem value="Class 6">Class 6</SelectItem>
                <SelectItem value="Class 7">Class 7</SelectItem>
                <SelectItem value="Class 8">Class 8</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-40" data-testid="select-subject">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Math</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="EVS">EVS</SelectItem>
                <SelectItem value="Social Studies">Social Studies</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredWorksheets.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">No worksheets found matching your criteria.</p>
              <Button 
                className="mt-4" 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGrade("all");
                  setSelectedSubject("all");
                }}
                data-testid="button-reset"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredWorksheets.map((worksheet, index) => (
                <WorksheetCard key={index} {...worksheet} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
