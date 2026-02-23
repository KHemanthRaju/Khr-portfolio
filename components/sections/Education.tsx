"use client";

import { education, certifications } from "@/lib/constants/education";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">Education & Certifications</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">Academic excellence and professional credentials</p>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu) => (
            <Card key={edu.id} className="relative overflow-hidden">
              {/* GPA Highlight Badge */}
              {parseFloat(edu.gpa) > 4.0 && (
                <div className="absolute top-4 right-4">
                  <Badge variant="primary" className="animate-pulse-glow">
                    Exceptional GPA
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-8 h-8 text-cyan dark:text-cyan light:text-blue-600 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-cyan dark:text-cyan light:text-blue-600 font-semibold mt-1">
                      {edu.field}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-white dark:text-white light:text-gray-900 font-semibold mb-2">{edu.school}</p>
                <div className="flex items-center gap-4 text-sm text-slate dark:text-slate light:text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-slate dark:text-slate light:text-gray-700">GPA:</span>
                  <span className="text-2xl font-bold text-cyan dark:text-cyan light:text-blue-600">{edu.gpa}</span>
                </div>

                <p className="text-slate dark:text-slate light:text-gray-700 text-sm mb-4">{edu.description}</p>

                <div>
                  <p className="text-sm text-slate dark:text-slate light:text-gray-700 mb-2">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan dark:text-cyan light:text-blue-600" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan/10 dark:bg-cyan/10 light:bg-blue-50 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-cyan dark:text-cyan light:text-blue-600" />
                  </div>
                  <h4 className="font-bold text-white dark:text-white light:text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-sm text-cyan dark:text-cyan light:text-blue-600 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-slate dark:text-slate light:text-gray-600 mb-3">{cert.description}</p>
                  <Badge variant="secondary">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
