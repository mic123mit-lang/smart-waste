# SmartWaste AI Platform

SmartWaste AI is a production-style smart city waste management platform built with Next.js and React. It is designed to showcase how a city can unify citizens, drivers, municipal teams, and administrators around one AI-powered waste ecosystem.

The app focuses on a real product narrative for Smart India Hackathon 2026: citizen reporting, route efficiency, hotspot prediction, reward incentives, fraud monitoring, and cleaner urban operations.

## What this demo includes

- AI-style smart city landing page and product storytelling
- Citizen portal for complaint reporting and waste impact tracking
- Driver dashboard for trip assignment and vehicle status
- Municipal command center for route health, hotspots, and waste trends
- Administrator dashboard for operational KPIs and platform oversight
- Demo login system with role-based access
- Mock API routes and in-memory data for a working MVP experience
- Analytics visualizations, reward wallet flow, and cleanup reporting
- Responsive dark-themed UI tailored for a smart civic product

## Core product flows

- Citizens can submit waste issues, monitor pickups, and view wallet rewards
- Drivers can see assigned routes, vehicle states, and task progress
- Municipal teams can inspect hotspots, collection metrics, and route efficiency
- Administrators can review platform-level performance and operational insights
- The platform uses mock data to simulate a realistic city waste management pipeline

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Recharts
- App Router API routes
- Custom global CSS and responsive dashboard styling

## Demo credentials

Use any of the following accounts in the login screen:

- Citizen: citizen@smartwaste.ai / citizen123
- Driver: driver@smartwaste.ai / driver123
- Municipal: municipal@smartwaste.ai / municipal123
- Administrator: admin@smartwaste.com / admin123

## Run locally

```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

Open the app at:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

This project was verified with a successful production build before release.

## Project structure

```bash
smart-waste/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── citizen/
│   │   ├── driver/
│   │   ├── login/
│   │   ├── report/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── how-it-works/
│   │   ├── register/
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
├── next-env.d.ts
├── README.md
└── public/
```

## Notes

This is a demo-first implementation using mock data and API routes instead of a real database or production authentication system. The objective is to present a working, credible smart city MVP that can be expanded into a real platform with live services, geospatial data, and full backend integration.

## Possible next steps

- Add real database persistence
- Integrate secure authentication and role checks
- Connect to live GIS and route optimization APIs
- Add real-time notification delivery
- Expand AI forecasting and fraud detection models
- Integrate wallet and rewards backends

## License

This project is intended for demonstration, hackathon, and educational use.
