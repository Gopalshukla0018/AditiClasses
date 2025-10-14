import { Link } from "wouter";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">Aditi Classes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Quality education for Nursery to 8th grade with personalized attention and care.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/live-classes", label: "Live Classes" },
                { href: "/worksheets", label: "Worksheets" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground" data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">About</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/demo", label: "Book Demo" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground" data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-phone">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-email">contact@aditiclasses.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">123 Education Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Aditi Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
