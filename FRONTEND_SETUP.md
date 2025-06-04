# Frontend-Only Portfolio Setup

This is a simplified version of your portfolio that runs as a static website with no backend or database required.

## What's Included
- All your portfolio content (about, skills, projects, testimonials)
- Working dark/light mode toggle
- EmailJS contact form integration
- Resume download functionality
- Responsive design

## Setup Instructions

1. **Create a new folder** for your frontend-only portfolio
2. **Copy these files** from your current project:
   - Copy the entire `client/src/` folder to `src/`
   - Copy `client/index.html` to root (or use the new `frontend-index.html`)
   - Copy `client/public/` folder to `public/`
   - Copy `attached_assets/` folder to root
   - Use `frontend-package.json` as your `package.json`
   - Use `frontend-vite.config.ts` as your `vite.config.ts`
   - Copy `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   Your site will run on `http://localhost:3000`

5. **Build for production**:
   ```bash
   npm run build
   ```

## Key Changes Made
- Removed all backend/server code
- Removed database dependencies
- Simplified Vite configuration
- Updated scripts to use Vite directly
- Contact form ready for EmailJS (no backend needed)

## Deployment Options
Since this is now a static website, you can easily deploy to:
- **Netlify** (drag and drop the `dist` folder)
- **Vercel** (connect GitHub repository)
- **GitHub Pages** (free hosting)
- **Surge.sh** (simple command line deployment)

## Contact Form Setup
To make the contact form work:
1. Sign up at emailjs.com
2. Get your Service ID, Template ID, and Public Key
3. Update the credentials in `src/components/sections/contact.tsx`

Your portfolio is now much simpler and easier to deploy!