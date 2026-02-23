"use client";

import { profile } from "@/lib/constants/profile";
import { socialLinks } from "@/lib/constants/social";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-darkGray dark:bg-darkGray light:bg-gray-100 border-t border-lightNavy dark:border-lightNavy light:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-mono text-cyan dark:text-cyan light:text-blue-600 mb-4">
              &lt;{profile.shortName.split(" ").map(n => n[0]).join("")} /&gt;
            </h3>
            <p className="text-slate dark:text-slate light:text-gray-600 text-sm mb-4">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-200 hover:bg-cyan/10 light:hover:bg-blue-50 hover:text-cyan light:hover:text-blue-600 transition-all duration-200 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-slate dark:text-slate light:text-gray-600 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate dark:text-slate light:text-gray-600 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-slate dark:text-slate light:text-gray-600 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 transition-colors"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-slate dark:text-slate light:text-gray-600">{profile.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lightNavy dark:border-lightNavy light:border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate dark:text-slate light:text-gray-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {profile.name}. Built with{" "}
            <Heart className="w-4 h-4 inline text-coral fill-coral" /> and{" "}
            <span className="text-cyan dark:text-cyan light:text-blue-600">Next.js</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-200 hover:bg-cyan/10 light:hover:bg-blue-50 text-cyan dark:text-cyan light:text-blue-600 transition-all duration-200 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
