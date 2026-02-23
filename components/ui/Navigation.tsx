"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/constants/profile";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="text-xl font-bold font-mono text-cyan dark:text-cyan light:text-blue-600 hover:scale-105 transition-transform"
            >
              &lt;{profile.shortName.split(" ").map(n => n[0]).join("")} /&gt;
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan dark:text-cyan light:text-blue-600 bg-cyan/10 dark:bg-cyan/10 light:bg-blue-50"
                      : "text-slate dark:text-slate light:text-gray-600 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 hover:bg-cyan/5 light:hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(profile.resumeUrl, "_blank")}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-100 hover:bg-cyan/10 light:hover:bg-blue-50 text-cyan dark:text-cyan light:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-navy/95 dark:bg-navy/95 light:bg-white/95 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative glass h-full pt-20 px-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-6 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan dark:text-cyan light:text-blue-600 bg-cyan/10 dark:bg-cyan/10 light:bg-blue-50"
                      : "text-slate dark:text-slate light:text-gray-600 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 hover:bg-cyan/5 light:hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    window.open(profile.resumeUrl, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
