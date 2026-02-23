"use client";

import { featuredProjects } from "@/lib/constants/featured-projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, Star } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">Showcasing my best work</p>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl line-clamp-2">{project.name}</CardTitle>
                    {project.stars && (
                      <div className="flex items-center gap-1 text-sm text-slate dark:text-slate light:text-gray-600 mt-2">
                        <Star className="w-4 h-4 text-cyan dark:text-cyan light:text-blue-600 fill-cyan dark:fill-cyan light:fill-blue-600" />
                        <span>{project.stars} stars</span>
                      </div>
                    )}
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <CardDescription className="text-slate dark:text-slate light:text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </CardDescription>

                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-cyan dark:text-cyan light:text-blue-600 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-lightSlate dark:text-lightSlate light:text-gray-700 flex items-start gap-2">
                          <span className="text-cyan dark:text-cyan light:text-blue-600 mt-0.5">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="flex-1"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                {project.demoUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/KHemanthRaju", "_blank")}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
