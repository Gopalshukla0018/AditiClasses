import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BookOpen, LogIn, UserPlus } from "lucide-react";

// Aditi dwara padhaye jaane wali classes (Mandatory Business Data)
const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
];

// Sign Up Form (High Conversion for New Users)
const SignUpForm = ({ onToggle }:  { onToggle: () => void }) => (
  <form className="grid gap-4">
    <div className="text-center">
      <h2 className="text-2xl font-bold">Create Your Free Account</h2>
      <p className="text-sm text-muted-foreground">Access paid and free worksheets instantly.</p>
    </div>

    {/* OAuth Button - Primary and Low-Friction */}
    <Button variant="outline" className="w-full py-2 text-base" type="button">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Logo" className="w-5 h-5 mr-3" />
      Continue with Google
    </Button>

    <Separator className="my-2">
      <span className="text-xs text-muted-foreground bg-card px-2">OR</span>
    </Separator>

    {/* Traditional Sign Up Form - MVDC: Email, Password, Class */}
    <div className="grid gap-2">
      <Label htmlFor="email-signup">Email Address</Label>
      <Input id="email-signup" type="email" placeholder="gopal@example.com" required />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="password-signup">Password</Label>
      <Input id="password-signup" type="password" required />
    </div>

    {/* Mandatory Business Data Field (Class) */}
    <div className="grid gap-2">
      <Label htmlFor="child-class">Child's Class (Mandatory)</Label>
      <Select required>
        <SelectTrigger id="child-class">
          <SelectValue placeholder="Select your child's current class" />
        </SelectTrigger>
        <SelectContent>
          {classes.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <Button type="submit" className="w-full mt-2  text-lg font-semibold bg-blue-600 hover:bg-blue-700">
      <UserPlus className="h-5 w-5 mr-2" />
      Create My Account
    </Button>
    
    <Button className="w-full text-sm mt-1" onClick={onToggle} type="button">
      Already have an account? Sign In
    </Button>
  </form>
);
// Sign In Form (Existing Users)
const SignInForm = ({ onToggle }:  { onToggle: () => void }) => (
  <form className="grid gap-4">
    <div className="text-center">
      <h2 className="text-2xl font-bold">Welcome Back!</h2>
      <p className="text-sm text-muted-foreground">Access your purchased worksheets and tools.</p>
    </div>

    {/* OAuth Button - Primary and Low-Friction */}
    <Button variant="outline" className="w-full py-6 text-base" type="button">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Logo" className="w-5 h-5 mr-3" />
      Continue with Google
    </Button>

    <Separator className="my-2">
      <span className="text-xs text-muted-foreground bg-card px-2">OR</span>
    </Separator>

    {/* Traditional Sign In Form */}
    <div className="grid gap-2">
      <Label htmlFor="email-signin">Email Address</Label>
      <Input id="email-signin" type="email" placeholder="gopal@example.com" required />
    </div>
    <div className="grid gap-1">
      <Label htmlFor="password-signin">Password</Label>
      <Input id="password-signin" type="password" required />
<Button variant="ghost" className="p-2 h-auto text-xs justify-start w-1/3" type="button">
    Forgot Password?
</Button>    </div>
    
    <Button type="submit" className="w-full mt-4 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
      <LogIn className="h-2 w-5 mr-2" />
      Sign In
    </Button>

    <Button variant="ghost" className="w-full text-sm mt-1" onClick={onToggle} type="button">
      Don't have an account? Create one
    </Button>
  </form>
);

export default function AuthPage() {
  // Strategy: Default to Sign Up
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => setIsSignUp(prev => !prev);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/20 p-4 md:p-8">
      <div className="w-full max-w-md space-y-8 bg-card p-6 shadow-lg rounded-lg border">
        
        {/* Logo and Branding - Compounding Trust */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Aditi Classes</h1>
        </div>

        {/* Conditional Rendering of Forms */}
        {isSignUp 
          ? <SignUpForm onToggle={toggleForm} />
          : <SignInForm onToggle={toggleForm} />
        }

      </div>
    </div>
  );
}