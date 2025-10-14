import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, IndianRupee, Eye } from "lucide-react";

interface WorksheetCardProps {
  title: string;
  subject: string;
  grade: string;
  price: number;
  pages: number;
  thumbnail?: string;
}

export default function WorksheetCard({ title, subject, grade, price, pages, thumbnail }: WorksheetCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FileText className="h-16 w-16 text-muted-foreground" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Button size="sm" variant="secondary" className="flex-1 backdrop-blur-sm" data-testid="button-preview">
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </Button>
            </div>
          </div>
          <Badge className="absolute right-2 top-2" data-testid="badge-pages">{pages} Pages</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 p-4">
        <div className="space-y-1">
          <CardTitle className="line-clamp-2 text-base" data-testid="text-worksheet-title">{title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs" data-testid="badge-grade">{grade}</Badge>
            <Badge variant="outline" className="text-xs" data-testid="badge-subject">{subject}</Badge>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-xl font-bold text-foreground">
          <IndianRupee className="h-4 w-4" />
          <span data-testid="text-price">{price}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" data-testid="button-add-cart">
          <Download className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
