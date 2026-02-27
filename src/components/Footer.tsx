import { Stars } from "lucide-react";

const Footer = () => (
  <footer className="py-16 border-t border-gold/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Stars className="w-5 h-5 text-primary" />
          <span className="font-display text-lg text-gradient-gold tracking-wide">CELESTIA</span>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Celestia Fragrances. Scented by the cosmos.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground font-body">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
