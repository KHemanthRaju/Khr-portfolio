# 💼 Hemanth Raju Koneti - Professional Portfolio

> A modern, full-stack portfolio website showcasing cloud development expertise, AI/ML projects, and professional experience. Built with cutting-edge technologies to demonstrate technical proficiency to recruiters and potential employers.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

🔗 **Live Demo**: [Coming Soon]

---

## 🎯 Overview

This portfolio represents a comprehensive showcase of my professional journey as an **AWS Cloud Developer** and **Full-Stack Engineer**. It features real-time GitHub integration, responsive design, smooth animations, and optimized performance - demonstrating the same quality of work I bring to production applications.

### 🌟 Key Highlights

- 🎓 **Master's in Computer Science** - Arizona State University (Perfect 4.00 GPA)
- ☁️ **AWS Certified** - Solution Architect & Cloud Practitioner (2025)
- 💼 **Current Role** - AWS Cloud Developer at ASU Cloud Innovation Center
- 🏢 **Previous** - Software Engineer at Oracle Cerner (3+ years)
- 🚀 **Featured Projects** - AI chatbots, face recognition systems, RAG implementations
- 🛠️ **Core Skills** - AWS, React, Python, Java, TypeScript, AI/ML, Cloud Architecture

---

## ✨ Features

### 🎨 **Design & UX**
- Modern dark/light theme with smooth toggle
- Glass morphism effects and gradient accents
- Fully responsive mobile-first design
- Smooth scroll animations and transitions
- Accessible (WCAG AA compliant)

### 🔧 **Technical**
- Server-side rendering with Next.js 15 App Router
- Real-time GitHub API integration
- TypeScript for type safety
- SEO optimized with comprehensive metadata
- Performance optimized (targeting Lighthouse 95+)
- Deployed on Netlify with CI/CD

### 📱 **Sections**
1. **Hero** - Professional introduction with AWS certification badge
2. **About** - Background, expertise, and current focus
3. **Experience** - ASU Cloud Innovation Center & Oracle Cerner
4. **Education** - Master's degree (4.00 GPA) & certifications
5. **Skills** - Categorized technical skills and tools
6. **Projects** - Featured projects with live demos and GitHub links
7. **Contact** - Direct communication channels

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control
- **GitHub Token** (optional, for API integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KHemanthRaju/Khr-portfolio.git
   cd Khr-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # GitHub API Integration (Optional)
   GITHUB_TOKEN=your_github_personal_access_token
   NEXT_PUBLIC_GITHUB_USERNAME=KHemanthRaju

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

   > **Note**: GitHub token is optional. Without it, you'll use the featured projects from constants.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

### Local Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Deploy to Netlify

This portfolio is configured for seamless Netlify deployment:

1. **Connect Repository**
   - Sign up at [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

3. **Add Environment Variables**
   - Add your `GITHUB_TOKEN` in Netlify dashboard
   - Add `NEXT_PUBLIC_SITE_URL` with your domain

4. **Deploy**
   - Netlify will automatically build and deploy
   - Every push to `main` triggers a new deployment

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🎨 Customization Guide

### Update Personal Information

All data is centralized in `/lib/constants/`:

| File | Purpose |
|------|---------|
| `profile.ts` | Name, bio, email, location, availability |
| `experience.ts` | Work history and achievements |
| `education.ts` | Degrees, GPA, coursework, certifications |
| `skills.ts` | Technical skills organized by category |
| `featured-projects.ts` | Highlighted projects with details |
| `social.ts` | LinkedIn, GitHub, email links |

### Update Resume

Replace the file at `/public/resume/Hemanth_Raju_K_Resume.pdf` with your latest resume.

### Customize Theme Colors

Edit `/tailwind.config.ts`:

```typescript
colors: {
  navy: "#0a192f",        // Primary background
  cyan: "#64ffda",        // Accent color
  coral: "#ff6b6b",       // Secondary accent
  // ... modify as needed
}
```

### Modify Content Sections

Each section is a standalone component in `/components/sections/`:
- `Hero.tsx` - Landing section
- `About.tsx` - Professional bio
- `Experience.tsx` - Work timeline
- `Education.tsx` - Academic background
- `Skills.tsx` - Technical skills
- `Projects.tsx` - Project showcase
- `Contact.tsx` - Contact form

---

## 📁 Project Structure

```
Khr-portfolio/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── github/               # GitHub API proxy
│   │   └── contact/              # Contact form handler
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Main homepage
│   └── globals.css               # Global styles + Tailwind
│
├── components/
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── ui/                       # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   └── providers/                # Context providers
│       └── ThemeProvider.tsx
│
├── lib/
│   ├── constants/                # Data files
│   ├── github/                   # GitHub API client
│   │   ├── client.ts
│   │   ├── fetchers.ts
│   │   └── types.ts
│   └── utils/                    # Helper functions
│
├── public/
│   ├── images/                   # Static images
│   │   ├── profile.jpg
│   │   └── og-image.png
│   └── resume/                   # Resume PDF
│
├── types/                        # TypeScript types
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first styling

### UI & Animations
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible components

### APIs & Data
- **[Octokit](https://github.com/octokit/rest.js)** - GitHub REST API client
- **[SWR](https://swr.vercel.app/)** - Data fetching & caching

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Git](https://git-scm.com/)** - Version control

---

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server on localhost:3000

# Production
npm run build            # Build optimized production bundle
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types

# Utilities
npm run clean            # Clean build artifacts
```

---

## 🎯 Performance & SEO

### Lighthouse Scores (Target)
- ⚡ **Performance**: 95+
- ♿ **Accessibility**: 100
- 🔍 **SEO**: 100
- ✅ **Best Practices**: 100

### Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with next/font
- Efficient caching strategies
- Minimal third-party scripts
- Semantic HTML and proper heading hierarchy

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

You are free to use this portfolio as a template for your own portfolio. Please provide attribution by linking back to this repository.

---

## 📬 Contact

**Hemanth Raju Koneti**

- 📧 Email: [hkoneti@asu.edu](mailto:hkoneti@asu.edu)
- 💼 LinkedIn: [linkedin.com/in/khemanthraju](https://linkedin.com/in/khemanthraju)
- 🐙 GitHub: [github.com/KHemanthRaju](https://github.com/KHemanthRaju)
- 🌐 Portfolio: [Coming Soon]

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Netlify](https://www.netlify.com/)

---

<div align="center">

**Built with ❤️ and [Next.js](https://nextjs.org/) by Hemanth Raju Koneti**

⭐ Star this repo if you found it helpful!

</div>
