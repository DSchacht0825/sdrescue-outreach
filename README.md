# San Diego Rescue Mission Outreach Website

A modern web application for San Diego Rescue Mission Outreach, built with React, TypeScript, Tailwind CSS, and Node.js.

## Project Structure

```
/sdrescue/outreach/
├── sdrm-outreach/     # React frontend
└── sdrm-backend/      # Node.js backend
```

## Getting Started

### Backend Setup
```bash
cd sdrm-backend
npm install
npm run dev
```
The backend will run on http://localhost:5000

### Frontend Setup
```bash
cd sdrm-outreach
npm install
npm start
```
The frontend will run on http://localhost:3000

## Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Programs Section**: Dynamic display of SDRM programs
- **Contact Form**: Easy way for visitors to get in touch
- **API Integration**: Connected to Node.js backend for dynamic content
- **SDRM Branding**: Consistent with official SDRM colors and messaging

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Fetch API for backend communication

### Backend
- Node.js with Express
- MongoDB ready (with Mongoose)
- JWT authentication setup
- CORS enabled for frontend communication

## Color Scheme
- Navy: `#0F172A`
- Blue: `#1E3A8A`
- Gold: `#F59E0B`
- Gray: `#6B7280`
- Light: `#F3F4F6`