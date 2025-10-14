import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import LiveClasses from "@/pages/LiveClasses";
import Worksheets from "@/pages/Worksheets";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
// import Demo from "@/pages/Demo";
import NotFound from "@/pages/not-found";
import AuthPage from "./pages/AuthPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/live-classes" component={LiveClasses} />
      <Route path="/worksheets" component={Worksheets} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/authpage" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
