import * as React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-muted/70 to-muted/20 pt-16 pb-8 overflow-hidden">
      {/* Geometric decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        {/* Left triangle */}
        <svg className="absolute -top-10 -left-10 text-primary/5 w-40 h-40" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none">
          <polygon points="0,0 100,0 0,100" />
        </svg>
        
        {/* Right triangle */}
        <svg className="absolute -bottom-10 -right-10 text-primary/5 w-40 h-40" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100" />
        </svg>
        
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)',
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      <div className="container pl-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-lg flex items-center mb-4">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-2 text-sm">NR</span>
              <span className="text-primary">Nishchay</span> Rajput
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Computer Science student at IIT Bhilai passionate about innovative technology and elegant design solutions.
            </p>

            <div className="flex gap-2 mt-4">
              <a href="https://github.com/nishchayrajput" target="_blank" rel="noopener noreferrer"
                className="h-8 w-8 rounded-md flex items-center justify-center bg-muted/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/nishchay-rajput-83969a264/" target="_blank" rel="noopener noreferrer"
                className="h-8 w-8 rounded-md flex items-center justify-center bg-muted/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://x.com/Nishchay1801" target="_blank" rel="noopener noreferrer"
                className="h-8 w-8 rounded-md flex items-center justify-center bg-muted/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.iitbhilai.ac.in" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  IIT Bhilai Website
                </a>
              </li>
              <li>
                <a href="https://github.com/nishchayrajput" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume / CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg flex items-center">
              <span className="inline-block w-6 h-0.5 bg-primary/80 mr-2"></span>
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="mailto:nishchayr@iitbhilai.ac.in" className="flex items-center group">
                  <span className="mr-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">nishchayr@iitbhilai.ac.in</span>
                </a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <div className="flex items-center group">
                  <span className="mr-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">IIT Bhilai, Chhattisgarh, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground relative group">
            <span className="absolute -left-3 top-1/2 w-2 h-2 rounded-full bg-primary transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            © {new Date().getFullYear()} Nishchay Rajput. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <span>Designed & Developed with ❤️ by </span>
            <a href="https://github.com/nishchayrajput" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
              Nishchay Rajput
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
