import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmartWaste | AI Waste Management',
  description: 'AI-powered waste management dashboard with reporting, admin controls, and smart collection insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
