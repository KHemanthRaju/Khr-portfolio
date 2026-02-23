"use client";

import { experience } from "@/lib/constants/experience";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-darkGray/30 dark:bg-darkGray/30 light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">My professional journey</p>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card key={job.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-cyan dark:text-cyan light:text-blue-600" />
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-lg text-cyan dark:text-cyan light:text-blue-600 font-semibold mt-2">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <span className="flex items-center gap-1 text-slate dark:text-slate light:text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {job.startDate} - {job.endDate}
                    </span>
                    <span className="flex items-center gap-1 text-slate dark:text-slate light:text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-slate dark:text-slate light:text-gray-700 mb-4">{job.description}</p>

                <ul className="space-y-2 mb-6">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-lightSlate dark:text-lightSlate light:text-gray-700">
                      <span className="text-cyan dark:text-cyan light:text-blue-600 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
