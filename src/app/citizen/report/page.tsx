'use client';

import { FormEvent, useState } from 'react';
import AppShell from '@/components/AppShell';
import { wasteCategories } from '@/lib/mockData';

export default function CitizenReportPage() {
  const [form, setForm] = useState({
    wasteCategory: 'Plastic',
    description: 'Plastic bags and packaging near the public park gate',
    location: 'Sector 21, Lane 4',
    gps: '23.0225, 72.5714',
    severity: 'High',
    notes: 'Mixed packaging and bottle caps',
  });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reporter: 'Nina Patel',
        location: form.location,
        type: form.wasteCategory,
        volumeKg: 5,
        priority: form.severity === 'High' ? 'High' : 'Medium',
      }),
    });
    setSubmitted(true);
  }

  return (
    <AppShell
      title="Report Waste"
      subtitle="Submit a pickup request and create a verified waste ticket."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report', active: true },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="panel">
        <form className="report-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              Waste category
              <select value={form.wasteCategory} onChange={(e) => setForm({ ...form, wasteCategory: e.target.value })}>
                {wasteCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
            <label>
              Severity
              <select value={form.severity} onChange={(e) => setForm({ ...form, severity: e.target.value })}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>
          </div>

          <label>
            Description
            <textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </label>

          <div className="field-row">
            <label>
              Location
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </label>
            <label>
              GPS coordinates
              <input value={form.gps} onChange={(e) => setForm({ ...form, gps: e.target.value })} />
            </label>
          </div>

          <label>
            Notes
            <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </label>

          <button className="primary-btn full-width" type="submit">Submit pickup request</button>
          {submitted ? <p className="success-message">Pickup request created. Optional pickup ID: WM-2026-000124</p> : null}
        </form>
      </div>
    </AppShell>
  );
}
