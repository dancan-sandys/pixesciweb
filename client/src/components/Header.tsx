import { Button } from "@/components/ui/button";

const AUTH_URL = "https://web.pixesci.com/";

export function Header() {
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
              asChild
              data-testid="button-get-started"
            >
              <a href={AUTH_URL}>Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
