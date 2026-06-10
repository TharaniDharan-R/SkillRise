# About SkillRise

## Project Overview
SkillRise is a modern learning platform built to help students and learners track their progress across different technology domains such as Java, Frontend, Backend, Fullstack, Cloud, AI, DevOps, Mobile, and Cybersecurity. The project combines a clean dashboard, a structured roadmap, topic details, and achievement tracking to make learning more organized and motivating.

## What this project does
- Lets users register and log in to a personal learning account.
- Shows a dashboard with total topics, completed topics, XP, and learning progress.
- Provides a roadmap view for selected learning domains.
- Allows learners to mark topics as completed and earn XP.
- Stores user progress locally and on the backend for persistence.
- Uses a simple learning curriculum with articles, videos, code examples, and practice tasks.

## Main Features
1. User authentication
   - Registration and login flow
   - Secure password hashing using Node.js crypto
   - Token-based session handling

2. Learning dashboard
   - Overview of progress and goals
   - Topic summaries and progress statistics

3. Roadmap and topic details
   - Domain-based curriculum structure
   - Topic pages with learning resources and practice ideas

4. Achievement tracking
   - XP-based progress system
   - Completed-topic tracking

5. Responsive UI
   - Clean and user-friendly layout
   - Smooth visual interactions

## Technologies and tools used
### Frontend
- React – for building the user interface
- Vite – for fast development and project setup
- JavaScript (JSX) – for app logic and components
- CSS / Tailwind CSS – for styling and responsive design
- lucide-react – for icons
- framer-motion – for smooth animations and UI effects

### Backend / API
- Node.js – for the server runtime
- Native Node HTTP server – for building the API without extra frameworks
- JSON file storage – for storing registered users and progress data

### Other tools used
- Local storage – for saving user and progress state in the browser
- Fetch API – for communication between frontend and backend
- ESLint – for code quality and consistency

## Project structure summary
- src/pages – dashboard, roadmap, achievements, register, topic detail pages
- src/components – reusable UI blocks like cards and progress bars
- src/data – learning domains and curriculum data
- src/api – API client for auth and progress updates
- src/hooks – local storage logic
- backend – Node.js server and user data storage

## Purpose of the project
SkillRise is designed to make learning feel structured, measurable, and rewarding. It helps learners stay consistent by showing what they have completed, what is next, and how much progress they have made over time.

## Conclusion
SkillRise is a full learning-management style project built with React + Vite on the frontend and a simple Node.js backend on the server side. It combines modern UI design, progress tracking, and educational content into one complete learning app.
