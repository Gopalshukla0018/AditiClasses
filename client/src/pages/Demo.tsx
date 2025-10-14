import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Demo() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    preferredDate: "",
    preferredTime: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo booking submitted:", formData);
    toast({
      title: "Demo Class Booked!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Book Your Free Demo Class
          </h1>
          <p className="text-lg text-muted-foreground">
            Experience our teaching methodology firsthand
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Demo Class Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name</Label>
                        <Input
                          id="studentName"
                          placeholder="Enter student name"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          required
                          data-testid="input-student-name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent Name</Label>
                        <Input
                          id="parentName"
                          placeholder="Enter parent name"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          required
                          data-testid="input-parent-name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-email"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade/Class</Label>
                        <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                          <SelectTrigger id="grade" data-testid="select-grade">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursery">Nursery</SelectItem>
                            <SelectItem value="class-1">Class 1</SelectItem>
                            <SelectItem value="class-2">Class 2</SelectItem>
                            <SelectItem value="class-3">Class 3</SelectItem>
                            <SelectItem value="class-4">Class 4</SelectItem>
                            <SelectItem value="class-5">Class 5</SelectItem>
                            <SelectItem value="class-6">Class 6</SelectItem>
                            <SelectItem value="class-7">Class 7</SelectItem>
                            <SelectItem value="class-8">Class 8</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject of Interest</Label>
                        <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                          <SelectTrigger id="subject" data-testid="select-subject">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="evs">EVS</SelectItem>
                            <SelectItem value="social-studies">Social Studies</SelectItem>
                            <SelectItem value="all">All Subjects</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          required
                          data-testid="input-date"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                          <SelectTrigger id="preferredTime" data-testid="select-time">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (10 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (2 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any specific requirements or questions?"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        data-testid="input-notes"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                      Book Free Demo Class
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "45-minute interactive session",
                      "One-on-one attention",
                      "Subject assessment",
                      "Personalized learning plan",
                      "Q&A with the teacher"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Online Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    The demo class will be conducted online via Zoom/Google Meet
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a time slot that works best for you
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll confirm your slot within 2 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
