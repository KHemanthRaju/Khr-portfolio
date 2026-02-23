"use client";

import { skills } from "@/lib/constants/skills";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-darkGray/30 dark:bg-darkGray/30 light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">The tools I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category]) => (
            <Card key={key} className="hover:border-cyan/50 light:hover:border-blue-400">
              <CardHeader>
                <CardTitle className="text-xl text-cyan dark:text-cyan light:text-blue-600">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="tech"
                      className="cursor-pointer"
                      title={`${skill.level} - ${skill.years}+ years`}
                    >
                      {skill.name}
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
