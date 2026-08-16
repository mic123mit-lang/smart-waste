# SmartWaste

SmartWaste is a modern waste management web application built with Next.js and React. It is designed to help city teams and waste operators monitor collection activity, review reports, manage field issues, and maintain a cleaner and more efficient waste system.

This project is created as a polished dashboard-style prototype with a working mock backend, realistic charts, dark/light mode, and full CRUD-style report management.

## Overview

SmartWaste includes:

- a full multi-page dashboard
- an admin login screen
- a waste-report submission form
- a CRUD management panel for waste records
- route and collection insights
- chart-based analytics
- a map-style operational view
- a clean and attractive responsive UI

## Core features

- Eco-themed landing page and marketing section
- Admin dashboard with key performance metrics
- Real chart visualizations for waste volumes and collection trends
- Report submission form for community waste issues
- CRUD-style admin panel for editing or removing waste reports
- Simulated API backend using Next.js route handlers
- Dark and light theme switcher
- Map-like route visualization for city operations
- Responsive layout for desktop and mobile screens
- Easy local setup for team members with limited technical experience

## Tech stack

- Next.js
- React
- TypeScript
- Recharts
- CSS modules and custom styling
- App Router API routes for mock backend logic

## Project pages

- Home page: landing overview and product showcase
- Login page: demo admin authentication
- Dashboard: key metrics, route alerts, charts, and operational summary
- Report form: user submission for waste complaints or collection issues
- Admin CRUD page: edit, delete, and manage submitted reports

## Demo login

Use the following credentials to access the admin panel:

- Email: admin@smartwaste.com
- Password: admin123

## Run locally

From the project folder, run:

```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

Then open your browser at:

```text
http://localhost:3000
```

This is designed to be simple for team members to clone and run using one terminal command flow.

## Production build

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

## Project structure

```bash
smart-waste/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── login/
│   │   ├── report/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AnalyticsCharts.tsx
│   │   ├── MapView.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/
│       └── mockData.ts
├── package.json
├── next.config.mjs
├── tsconfig.json
├── .gitignore
├── README.md
└── public/
```

## Notes

This project uses mock data and in-memory API routes instead of a real database, so it can run easily without extra setup. It is intended as a polished demo/prototype for a smart waste management system and can be extended into a production application later.

## Future enhancements

- Real database integration
- JWT or secure authentication
- Real GIS/map integration
- Route optimization algorithms
- Bin and truck management modules
- Notifications and alert automation
- AI-based waste forecasting and predictive analytics

## License

This project is for demonstration and educational use.
