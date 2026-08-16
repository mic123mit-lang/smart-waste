'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import MapView from '@/components/MapView';
import AnalyticsCharts from '@/components/AnalyticsCharts';

const statCards = [
  { label: 'Total bins', value: '128', delta: '+12%' },
  { label: 'Alerts', value: '09', delta: '-4%' },
  { label: 'Route efficiency', value: '94%', delta: '+8%' },
  { label: 'Recycling rate', value: '87%', delta: '+15%' },
];

export default function AdminPage() {
  const [dashboard, setDashboard] = useState<any>(null);
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const [dashboardRes, reportsRes] = await Promise.all([
        fetch('/api/dashboard'),
        fetch('/api/reports'),
      ]);

      const dashboardData = await dashboardRes.json();
      const reportsData = await reportsRes.json();

      setDashboard(dashboardData);
      setReports(reportsData);
    }

    loadData();
  }, []);

  if (!dashboard) {
    return <main className="dashboard-shell">Loading dashboard...</main>;
  }

  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <span>SmartWaste</span>
        </div>

        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item active">Overview</Link>
          <Link href="/admin/crud" className="nav-item">CRUD Manager</Link>
          <Link href="/report" className="nav-item">Report Waste</Link>
          <Link href="/" className="nav-item">Home</Link>
        </nav>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Operations dashboard</p>
            <h1>Smart waste control center</h1>
          </div>
          <div className="header-actions">
            <ThemeToggle />
            <Link href="/login" className="secondary-btn link-btn">Logout</Link>
          </div>
        </header>

        <div className="stats-grid">
          {statCards.map((card) => (
            <div className="stat-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <em>{card.delta}</em>
            </div>
          ))}
        </div>

        <AnalyticsCharts />

        <div className="content-grid">
          <MapView />

          <div className="panel">
            <div className="panel-head">
              <h3>Waste mix</h3>
            </div>
            <div className="waste-list">
              {dashboard.wasteMix.map((item: any) => (
                <div className="waste-row" key={item.name}>
                  <div className="legend">
                    <span className="dot" style={{ background: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-grid lower-grid">
          <div className="panel">
            <div className="panel-head">
              <h3>Route alerts</h3>
            </div>
            <div className="alert-list">
              {dashboard.routeAlerts.map((alert: any) => (
                <div className="alert-item" key={alert.id}>
                  <div>
                    <strong>{alert.bin}</strong>
                    <p>{alert.location}</p>
                  </div>
                  <span className={`status-badge ${alert.status.toLowerCase()}`}>{alert.status}</span>
                  <small>{alert.fillLevel}% • {alert.eta}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>Recent reports</h3>
            </div>
            <ul className="report-list">
              {dashboard.recentReports.map((item: any) => (
                <li key={item.id}>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.zone}</small>
                  </div>
                  <span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel full-panel">
          <div className="panel-head">
            <h3>Live incident log</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Reporter</th>
                <th>Location</th>
                <th>Type</th>
                <th>Volume</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report: any) => (
                <tr key={report.id}>
                  <td>{report.reporter}</td>
                  <td>{report.location}</td>
                  <td>{report.type}</td>
                  <td>{report.volumeKg} kg</td>
                  <td><span className={`severity ${report.priority.toLowerCase()}`}>{report.priority}</span></td>
                  <td><span className={`status-badge ${report.status.toLowerCase().replace(/\s+/g, '-')}`}>{report.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
