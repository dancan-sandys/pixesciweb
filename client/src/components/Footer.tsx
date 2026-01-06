import { type MouseEvent } from "react";
import { SiYoutube, SiLinkedin, SiX } from "react-icons/si";
import { Mail, MapPin } from "lucide-react";
import logoImage from "@assets/ChatGPT Image Nov 28, 2025, 09_38_22 PM_1764384089669.png";

const footerLinks = {
  product: [
    { label: "Features", href: "#section-features" },
    { label: "Demo", href: "#section-demo" },
    { label: "Integrations", href: "#section-tools" },
    { label: "Pricing", href: "#section-faq" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:hello@pixesci.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: SiYoutube, href: "https://www.youtube.com/@pixesci", label: "YouTube" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/company/pixesci/", label: "LinkedIn" },
  { icon: SiX, href: "https://twitter.com/pixesci", label: "X" },
];

function smoothScrollTo(elementId: string) {
  const id = elementId.replace('#', '');
  const element = document.querySelector(`[data-testid="${id}"]`) || document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function Footer() {
  const handleLinkClick = (href: string, e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="PixeSci" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold">PixeSci</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Making scientific software simple. AI-powered automation for researchers who want to focus on science, not software.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  data-testid={`link-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:hello@pixesci.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              hello@pixesci.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            2025 PixeSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
