# Portfolio Website Project

## Overview

This is a UI Engineer portfolio website based on a modern React/TypeScript stack. The project is set up as a full-stack application with a React frontend and an Express backend. It uses Drizzle ORM for database interactions, Shadcn UI components for the interface, and supports both light and dark themes. The portfolio showcases skills, projects, testimonials, and includes a contact form that saves submissions to a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **UI Components**: Shadcn UI components (built on Radix UI primitives)
- **State Management**: React Query for data fetching and mutations
- **Animations**: Framer Motion for page and component animations
- **Forms**: React Hook Form with Zod validation

### Backend
- **Server**: Express.js
- **API Structure**: RESTful API endpoints with /api prefix
- **Database Access**: Drizzle ORM (with PostgreSQL compatibility)
- **Validation**: Zod for schema validation

### Database
- **ORM**: Drizzle with PostgreSQL schemas defined
- **Schema**:
  - `users` table for authentication
  - `contacts` table for contact form submissions
  
### Dev/Build Tools
- **Bundler**: Vite for development, esbuild for production builds
- **PostCSS**: For processing Tailwind CSS
- **TypeScript**: For type safety across the codebase

## Key Components

### Frontend Components
1. **Layout Components**:
   - Header: Navigation and theme toggle
   - Footer: Contact information and social links
   
2. **Page Components**:
   - Home: Main landing page with multiple sections
   - NotFound: 404 error page
   
3. **Section Components**:
   - Hero: Introduction section with call-to-action buttons
   - About: Personal background and skills overview
   - Skills: Technical skills display
   - Projects: Portfolio of work
   - Testimonials: Client feedback
   - Contact: Contact form with validation
   
4. **UI Components**:
   - Comprehensive set of Shadcn UI components (buttons, forms, alerts, etc.)
   - Dark/light theme toggle with persistent preferences

### Backend Components
1. **API Routes**:
   - `/api/contact`: Endpoint for receiving and storing contact form submissions
   - Additional contact management endpoints (partially implemented)
   
2. **Storage Layer**:
   - Interface for database operations
   - In-memory implementation for development
   - Drizzle ORM integration for production

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Client-side validation with Zod via React Hook Form
   - Form data sent to `/api/contact` endpoint
   - Backend validates data again using Zod
   - Contact saved to database
   - Success/error response sent back to client
   - UI displays toast notification based on response

2. **Theme Switching**:
   - User toggles theme via button in header
   - Theme state updated in React context
   - Theme preference saved to localStorage
   - CSS variables updated to reflect theme change

## External Dependencies

### Frontend Libraries
- React & React DOM for UI rendering
- Tailwind CSS for styling
- Radix UI for accessible component primitives
- React Query for data fetching
- React Hook Form for form management
- Zod for validation
- Framer Motion for animations
- Lucide React for icons
- React Icons for additional icon sets
- Wouter for routing

### Backend Libraries
- Express for the server
- Drizzle ORM for database interactions
- Zod for validation
- Connect-PG-Simple (for session management)

## Deployment Strategy

The application is configured for deployment on Replit with an autoscaling deployment target:

1. **Development**:
   - Uses Vite's development server with HMR
   - Serves both frontend and backend from same origin
   - Express serves API endpoints and proxies to Vite for frontend

2. **Production Build**:
   - Frontend: Vite builds static assets to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`
   - Production server serves static assets and API endpoints

3. **Database**:
   - Uses PostgreSQL (available as a Replit module)
   - Configured via environment variables (DATABASE_URL)
   - Schema can be deployed with Drizzle Kit

## Getting Started

1. The application will automatically start with `npm run dev` when opened in Replit
2. You need to ensure a PostgreSQL database is provisioned (the application expects DATABASE_URL)
3. Run `npm run db:push` to push the schema to the database
4. Access the application at the provided Replit URL (port 5000)

## Development Tasks

To work on this project:

1. **Frontend Development**:
   - Components are in `client/src/components/`
   - Pages are in `client/src/pages/`
   - Styles are managed through Tailwind in `client/src/index.css`

2. **Backend Development**:
   - Server code is in `server/`
   - API routes are defined in `server/routes.ts`
   - Database operations are in `server/storage.ts`

3. **Database Schema**:
   - Defined in `shared/schema.ts`
   - Use `npm run db:push` to update the database schema

## Common Tasks

- **Adding a new API endpoint**: Add the route to `server/routes.ts`
- **Creating a new component**: Add it to `client/src/components/`
- **Adding a new page**: Create the page in `client/src/pages/` and add the route in `App.tsx`
- **Modifying the database schema**: Update `shared/schema.ts` and run `npm run db:push`