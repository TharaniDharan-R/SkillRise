# SkillRise

SkillRise is a learning progress tracker built with React, Vite, and a simple Node.js backend. It helps learners explore technology domains, follow a roadmap, track completed topics, and earn XP as they progress.

## Features
- User registration and login
- Learning dashboard with progress overview
- Roadmap and topic detail pages
- XP and completed-topic tracking
- Local progress storage with backend sync support

## Tech Stack
- Frontend: React, Vite, JavaScript, Tailwind CSS
- UI helpers: lucide-react, framer-motion
- Backend: Node.js HTTP server
- Storage: JSON file store + browser local storage

## Getting Started

### 1. Install dependencies
npm install

### 2. Start the frontend
npm run dev

### 3. Start the backend API
npm run server

The frontend typically runs on http://localhost:5173 and the backend API on http://127.0.0.1:4000.

## Project Structure
- src/pages/ — dashboard, roadmap, achievements, register, topic detail screens
- src/components/ — reusable cards and progress visuals
- src/data/ — domain and curriculum content
- src/api/ — API client for authentication and progress updates
- backend/ — Node.js API server and user data storage

## Notes
- The backend uses a simple JSON file store for demo purposes.
- You can update the learning content in src/data/domains.js and src/data/javaCurriculum.js.

## License
This project is for learning and portfolio use.
