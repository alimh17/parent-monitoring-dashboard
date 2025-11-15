# Parent Monitoring Dashboard

A parental monitoring application built with Micro Frontend Architecture and Next.js 14+

## 🚀 Overview

This project is a parental monitoring dashboard similar to applications like mSpy, developed using modern front-end technologies.

### 🏗️ Architecture Features

- **Micro Frontend Architecture** with Module Federation
- **Next.js 14+** with TypeScript
- **Multi-Theme** (Light, Dark, Custom)
- **Multi-Language** (English, Persian)
- **Responsive Design** for all devices

## 📁 Project Structure

parent-monitoring-dashboard/
├── apps/
│ ├── shell/ # Host Application
│ ├── dashboard/ # Dashboard Micro Frontend
│ └── notification/ # Notification Micro Frontend
├── packages/
│ └── shared/ # Shared utilities and components
└── package.json

## 🛠️ Prerequisites

- Node.js 18+
- npm or yarn

## ⚡ Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <repository-url>
cd parent-monitoring-dashboard

# Install dependencies
npm install
```

# Build shared dependencies first

npm run build:shared

# Run all micro frontends simultaneously

npm run dev

This command runs simultaneously:

Shell App: http://localhost:3000

Dashboard: http://localhost:3001

Notification: http://localhost:3002

# Run specific micro frontend

npm run dev:shell # http://localhost:3000
npm run dev:dashboard # http://localhost:3001
npm run dev:notification # http://localhost:3002

npm run dev # Run all micro frontends
npm run dev:shell # Run shell only
npm run dev:dashboard # Run dashboard only
npm run dev:notification # Run notification only

npm run build # Build all applications
npm run build:shared # Build shared packages only
npm run build:shell # Build shell only
npm run build:dashboard # Build dashboard only
npm run build:notification # Build notification only

# Build all applications

npm run build

# Start production servers (run in separate terminals)

cd apps/shell && npm start # http://localhost:3000
cd apps/dashboard && npm start # http://localhost:3001  
cd apps/notification && npm start # http://localhost:3002

🌐 Application URLs
Shell Application: http://localhost:3000

Dashboard MF: http://localhost:3001

Notification MF: http://localhost:3002

🎨 Features
Theme System
Light Mode

Dark Mode

Custom Theme

Real-time theme switching

Multi-language Support
English (default)

Persian (Farsi)

RTL/LTR layout switching

Micro Frontend Architecture
Shell: Host application with navigation and layout

Dashboard: Device monitoring and statistics

Notification: Alert and notification system

Responsive Design
Desktop

Tablet

Mobile

🔧 Configuration
Environment Variables
Create .env.local file for each micro frontend:

# Shell App

NEXT_PUBLIC_SHELL_URL=http://localhost:3000

# Dashboard MF

NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3001

# Notification MF

NEXT_PUBLIC_NOTIFICATION_URL=http://localhost:3002

# Module Federation Config

Federation configuration in each micro frontend's next.config.js:

// Example for dashboard
new NextFederationPlugin({
name: 'dashboard',
filename: 'static/chunks/remoteEntry.js',
exposes: {
'./DashboardApp': './src/pages/index.tsx'
},
remotes: {
shell: 'shell@http://localhost:3000/\_next/static/chunks/remoteEntry.js'
}
})

🐳 Docker Support

FROM node:18-alpine

WORKDIR /app
COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# Build and run with docker-compose

docker-compose up --build

# Build specific service

docker build -t shell-app -f apps/shell/Dockerfile .

# Run individual container

docker run -p 3000:3000 shell-app

# Build all applications

npm run build

# Build output locations:

# - apps/shell/.next/

# - apps/dashboard/.next/

# - apps/notification/.next/

# Deployment Notes

Each micro frontend can be deployed independently

Ensure shared dependencies are properly loaded

Update remote URLs for production environment

🧪 Testing

# Run tests for all applications

npm run test

# Run specific test suites

npm run test:shell
npm run test:dashboard  
npm run test:notification

# Run E2E tests

npm run test:e2e

🔍 Troubleshooting
Common Issues
Module Federation Errors

Ensure all micro frontends are running

Check for port conflicts

Shared Dependencies Issues

npm run build:shared
rm -rf node_modules/.cache
rm -rf apps/\*/.next

🏗️ Technical Stack
Framework: Next.js 14+ with App Router

Language: TypeScript

UI Library: Material-UI (MUI)

State Management: React Context + Coordinator Pattern

Internationalization: i18next

Micro Frontend: Module Federation

Build Tool: Webpack 5

Package Manager: npm workspaces

📱 Micro Frontend Details
Shell Application
Main host application

Navigation and layout

Theme and language provider

Notification center

Dashboard Micro Frontend
Device monitoring overview

Statistics and analytics

Real-time activity tracking

Notification Micro Frontend
Alert management

Notification history

Filtering and sorting

🔒 Error Handling
Custom 404 pages

Error boundaries

Loading states

Graceful degradation

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Fork the repository

Create your feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a Pull Request

🆘 Support
For support and questions:

Check the troubleshooting section

Review console errors in browser

Verify all services are running on correct ports

Ensure shared dependencies are built

Built with ❤️ using Modern Micro Frontend Architecture
