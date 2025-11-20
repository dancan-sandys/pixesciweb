import { Button } from "@/components/ui/button";
import { Microscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-semibold text-foreground">PixeSci™</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:hello@pixesci.com"
              className="hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              hello@pixesci.com
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>

          <p className="text-xs text-muted-foreground pt-4">
            © 2025 PixeSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
