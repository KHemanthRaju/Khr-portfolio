export const skills = {
  languages: {
    title: "Languages",
    skills: [
      { name: "Python", level: "Advanced", years: 3 },
      { name: "JavaScript", level: "Advanced", years: 3 },
      { name: "TypeScript", level: "Intermediate", years: 2 },
      { name: "Java", level: "Advanced", years: 3 },
      { name: "SQL", level: "Advanced", years: 3 },
      { name: "HTML/CSS", level: "Advanced", years: 3 },
    ],
  },
  aiml: {
    title: "AI/ML",
    skills: [
      { name: "LLM Models", level: "Advanced", years: 1 },
      { name: "NLP", level: "Intermediate", years: 2 },
      { name: "AWS Bedrock", level: "Advanced", years: 1 },
      { name: "Amazon Q Business", level: "Advanced", years: 1 },
      { name: "RAG Systems", level: "Advanced", years: 1 },
      { name: "Computer Vision", level: "Intermediate", years: 2 },
    ],
  },
  frontend: {
    title: "Frontend",
    skills: [
      { name: "React", level: "Advanced", years: 2 },
      { name: "Next.js", level: "Advanced", years: 1 },
      { name: "Tailwind CSS", level: "Advanced", years: 2 },
      { name: "Streamlit", level: "Intermediate", years: 1 },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", years: 2 },
      { name: "Express", level: "Intermediate", years: 2 },
      { name: "Spring Boot", level: "Advanced", years: 3 },
      { name: "FastAPI", level: "Intermediate", years: 1 },
      { name: "REST APIs", level: "Advanced", years: 3 },
      { name: "Microservices", level: "Advanced", years: 3 },
    ],
  },
  databases: {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: "Intermediate", years: 2 },
      { name: "DynamoDB", level: "Advanced", years: 1 },
      { name: "MySQL", level: "Advanced", years: 3 },
      { name: "PostgreSQL", level: "Intermediate", years: 2 },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: "Advanced", years: 1 },
      { name: "EC2", level: "Advanced", years: 1 },
      { name: "S3", level: "Advanced", years: 1 },
      { name: "Lambda", level: "Advanced", years: 1 },
      { name: "Docker", level: "Intermediate", years: 2 },
      { name: "Kubernetes", level: "Beginner", years: 1 },
      { name: "Terraform", level: "Intermediate", years: 1 },
      { name: "CI/CD", level: "Advanced", years: 2 },
      { name: "Git", level: "Advanced", years: 3 },
      { name: "Jenkins", level: "Intermediate", years: 2 },
    ],
  },
  other: {
    title: "Other Tools",
    skills: [
      { name: "Kafka", level: "Intermediate", years: 1 },
      { name: "API Development", level: "Advanced", years: 3 },
      { name: "Agile/Scrum", level: "Advanced", years: 3 },
    ],
  },
};

export const skillsList = Object.values(skills).flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title,
  }))
);
