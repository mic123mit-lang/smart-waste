import Link from 'next/link';
import type { ReactNode } from 'react';

export type NavItem = { label: string; href: string; active?: boolean };

export default function AppShell({
  title,
  subtitle,
  navItems,
  children,
}: {
  title: string;
  subtitle?: string;
  navItems: NavItem[];
  children: ReactNode;
}) {
  return (
    <main className="page-shell-basic">
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 0, minHeight: '100vh' }}>
        <aside className="sidebar">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <span>SmartWaste AI</span>
          </div>
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-item ${item.active ? 'active' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="basic-page">
          <h1 className="page-title">{title}</h1>
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
          {children}
        </section>
      </div>
    </main>
  );
}
