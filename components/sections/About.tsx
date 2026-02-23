"use client";

import Image from "next/image";
import { profile } from "@/lib/constants/profile";
import { Card } from "@/components/ui/Card";
import { MapPin, Mail, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">Get to know me better</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan to-coral dark:from-cyan dark:to-coral light:from-blue-400 light:to-purple-400 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300" />

              {/* Profile image with border */}
              <div className="relative w-full h-full rounded-full border-4 border-cyan/30 dark:border-cyan/30 light:border-blue-400/40 overflow-hidden shadow-2xl group-hover:border-cyan/50 light:group-hover:border-blue-400/60 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Optional: Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-navy dark:border-navy light:border-white shadow-lg animate-pulse" title="Available for opportunities" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                Building the Future with Cloud & AI
              </h3>
              <p className="text-slate dark:text-slate light:text-gray-700 leading-relaxed mb-4">
                Currently working as an <span className="text-cyan dark:text-cyan light:text-blue-600 font-semibold">AWS Cloud Developer</span> at ASU Cloud Innovation Center, where I lead the development of cutting-edge AI/ML and cloud solutions for enterprise clients.
              </p>
              <p className="text-slate dark:text-slate light:text-gray-700 leading-relaxed mb-4">
                With over <span className="text-cyan dark:text-cyan light:text-blue-600 font-semibold">{profile.yearsOfExperience}+ years</span> of experience in software engineering, I've had the privilege of working at Oracle Cerner, building healthcare systems that impact thousands of practitioners daily.
              </p>
              <p className="text-slate dark:text-slate light:text-gray-700 leading-relaxed">
                I'm pursuing my <span className="text-cyan dark:text-cyan light:text-blue-600 font-semibold">Master's in Computer Science</span> at Arizona State University with a perfect <span className="text-cyan dark:text-cyan light:text-blue-600 font-semibold">4.00/4.00 GPA</span>, focusing on cloud computing and artificial intelligence.
              </p>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan dark:text-cyan light:text-blue-600" />
                  <div>
                    <p className="text-xs text-slate dark:text-slate light:text-gray-600">Location</p>
                    <p className="text-sm text-white dark:text-white light:text-gray-900 font-semibold">{profile.location.split(",")[0]}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan dark:text-cyan light:text-blue-600" />
                  <div>
                    <p className="text-xs text-slate dark:text-slate light:text-gray-600">Email</p>
                    <p className="text-sm text-white dark:text-white light:text-gray-900 font-semibold">{profile.email}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
