import { Button } from "@/components/ui/button";

export function Header() {
  const handleGetStarted = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">PixeSci</span>
            <span className="text-xs text-muted-foreground">™</span>
          </div>
          
          <div>
            <Button
              size="sm"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
