# Hemanth Raju Koneti - Portfolio

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to impress recruiters with a sleek dark theme, smooth animations, and real-time GitHub integration.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Dark Theme**: Professional dark navy theme with cyan accents and glass morphism effects
- **Theme Toggle**: Switch between dark and light modes
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **GitHub Integration**: Live project data fetched from GitHub API
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance**: Optimized images, code splitting, and fast load times

## 📋 Sections

1. **Hero** - Eye-catching introduction with name, title, bio, and GitHub stats
2. **About** - Professional bio and background
3. **Experience** - Work history with ASU Cloud Innovation Center and Oracle Cerner
4. **Education** - Academic achievements (4.11 GPA at ASU Master's!)
5. **Skills** - Categorized technical skills and tools
6. **Projects** - Featured projects with descriptions and tech stacks
7. **Contact** - Contact form and social media links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- GitHub account (for API integration)

### Installation

1. Clone or navigate to the repository:
\`\`\`bash
cd /Users/etloaner/hemanth/KHR_Portfolio
\`\`\`

2. Install dependencies (already done):
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` and add your credentials:
- **GITHUB_TOKEN**: Get from [GitHub Settings > Developer Settings > Personal Access Tokens](https://github.com/settings/tokens)
- **EMAILJS credentials**: Sign up at [EmailJS](https://www.emailjs.com/) for contact form

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

Vercel will automatically:
- Build and deploy your site
- Provide a custom domain
- Enable SSL/HTTPS
- Set up automatic deployments on git push

## 🎨 Customization

### Update Your Information

All personal data is stored in `/lib/constants/`:

- **profile.ts** - Name, bio, contact info
- **experience.ts** - Work history
- **education.ts** - Degrees and certifications
- **skills.ts** - Technical skills
- **featured-projects.ts** - Highlighted projects
- **social.ts** - Social media links

### Update Resume

Replace `/public/resume/Hemanth_Raju_K_Resume.pdf` with your latest resume

### Change Colors

Edit `/tailwind.config.ts` to customize the color scheme

### Modify Sections

Edit files in `/components/sections/` to customize each section

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI components
│   ├── animations/        # Animation components
│   ├── forms/             # Form components
│   └── providers/         # Context providers
├── lib/
│   ├── constants/         # Data files
│   ├── github/            # GitHub API integration
│   └── utils/             # Utility functions
├── public/
│   ├── images/            # Images and assets
│   └── resume/            # Resume PDF
└── config/                # Site configuration
\`\`\`

## 🔧 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **GitHub API**: [Octokit](https://github.com/octokit/rest.js)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features to Highlight for Recruiters

✅ **4.11 GPA** at Arizona State University (Master's in CS)
✅ **AWS Certified** (Solution Architect & Cloud Practitioner)
✅ **151+ GitHub projects** with 682 followers
✅ **3+ years experience** at Oracle and ASU Cloud Innovation Center
✅ **Featured Projects**: AI chatbots, facial recognition, RAG systems
✅ **Tech Skills**: AWS, React, Python, Java, AI/ML, Cloud Architecture

## 🔜 Future Enhancements

- [ ] Add particle background animation to Hero
- [ ] Implement blog section with MDX
- [ ] Add working contact form with EmailJS
- [ ] Create custom Open Graph image
- [ ] Add project detail pages
- [ ] Implement command palette (CMD+K)
- [ ] Add testimonials section
- [ ] Performance optimization (target Lighthouse 95+)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: hkoneti@asu.edu
- **Phone**: +1 (480) 971-6434
- **LinkedIn**: [linkedin.com/in/khemanthraju](https://linkedin.com/in/khemanthraju)
- **GitHub**: [github.com/KHemanthRaju](https://github.com/KHemanthRaju)

---

Built with ❤️ and Next.js by Hemanth Raju Koneti
