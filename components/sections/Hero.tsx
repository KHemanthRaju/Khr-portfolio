"use client";

import { profile } from "@/lib/constants/profile";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-darkGray to-lightNavy dark:from-navy dark:via-darkGray dark:to-lightNavy light:from-blue-50 light:via-white light:to-cyan-50 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <p className="text-cyan dark:text-cyan light:text-blue-600 text-lg font-mono">Hi, my name is</p>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-lightSlate dark:text-lightSlate light:text-gray-700">
            {profile.title}
          </h2>

          {/* Bio */}
          <p className="text-lg text-slate dark:text-slate light:text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {profile.bio}
          </p>

          {/* GitHub Stats */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate dark:text-slate light:text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-cyan dark:text-cyan light:text-blue-600 font-bold">{profile.github.repos}+</span> Projects
            </span>
            <span className="text-cyan dark:text-cyan light:text-blue-600">•</span>
            <span className="flex items-center gap-2">
              <span className="text-cyan dark:text-cyan light:text-blue-600 font-bold">{profile.github.followers}</span> Followers
            </span>
            <span className="text-cyan dark:text-cyan light:text-blue-600">•</span>
            <span className="text-cyan dark:text-cyan light:text-blue-600 font-bold">AWS Certified</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open(profile.resumeUrl, "_blank")}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-100 hover:bg-cyan/10 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 light:hover:bg-blue-50 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-100 hover:bg-cyan/10 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 light:hover:bg-blue-50 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-100 hover:bg-cyan/10 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600 light:hover:bg-blue-50 transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Availability Badge */}
          <div className="pt-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 dark:bg-cyan/10 light:bg-blue-50 border border-cyan/30 dark:border-cyan/30 light:border-blue-200 text-cyan dark:text-cyan light:text-blue-600 text-sm">
              <span className="w-2 h-2 bg-cyan dark:bg-cyan light:bg-blue-600 rounded-full animate-pulse" />
              {profile.availability}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cyan dark:border-cyan light:border-blue-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan dark:bg-cyan light:bg-blue-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
